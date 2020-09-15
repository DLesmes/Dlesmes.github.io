library(tidyverse)
library(dslabs)
library(dplyr)
library(lubridate)#codifica text
library(readr)#Leer csv
library(ggplot2)#gráficas
library(tidyr)#Ordenar matrices y dataframes
library(e1071)#Libreria de naivebayes
library("caret")#ML
#data <- read.delim('Cartera_Prueba.csv', sep = ";",fileEncoding="utf-8")
data <- read_delim('Cartera_Prueba.csv', delim = ";")#,fileEncoding="utf-8")#,col_types = 'dicddniinc')
data <- data.frame(data, stringsAsFactors = TRUE)
data$'A_FECHA' <-dmy(data$'A_FECHA')
data$'FECHA' <-dmy(data$'FECHA')
data$'FECHA_VTO' <-dmy(data$'FECHA_VTO')
campos <- colnames(data)
campos[9] <- 'Dias_mora'
colnames(data) = campos
data <- data %>% mutate('Categoria'= ifelse(data$ESTADO == 1,'A',
                                     ifelse(data$ESTADO == 2,'B',
                                     ifelse(data$ESTADO == 3,'C',
                                     ifelse(data$ESTADO == 4,'D','E')))))

data <- data %>%  mutate('Record' = paste(NRO_FACTURA,FECHA_VTO,sep=""))
index <- which(is.na(data$NRO_FACTURA))
data <- data %>% slice(-index)
index <- which(is.na(data$FECHA_VTO))
data <- data %>% slice(-index)
length(index)
str(data)
colnames(data)
for (i in colnames(data)){print(c(i,length(unique(pull(data, i)))))}

###EDA_________________________________________________________________________

hist(data$Dias_mora)

data$FECHA_VTO == data$FECHA

data %>% group_by(Sector) %>% 
  ggplot(aes(Sector, MES)) +
  geom_boxplot()

str(data)
summary(data)

(data$A_FECHA - data$FECHA_VTO) == data$Dias_mora


##Other Graphics

G1 <- data %>% ggplot(aes(Dias_mora, Sector)) +
  geom_boxplot()

G2 <- data %>% ggplot(aes(Dias_mora, Categoria)) +
  geom_boxplot()

G4 <- data %>% ggplot(aes(SALDO_A_FECHA, Categoria)) +
  geom_boxplot()

data %>%  group_by(Categoria) %>% 
  summarise('cantidad' = length(ID)) %>% 
  mutate('%' = cantidad/nrow(data)*100)

data %>%  group_by(Sector) %>% 
  summarise(length(ID))

data %>%  filter(Dias_mora > 0) %>% 
  group_by(Categoria) %>% 
  summarise('li' = min(Dias_mora),
            'ls' = max(Dias_mora),
            'cantidad' = length(ID)) %>% 
  mutate('%' = cantidad/nrow(data)*100)

data %>%  filter(Dias_mora > 0) %>% 
  group_by(Sector) %>% 
  summarise('li' = min(Dias_mora),
            'ls' = max(Dias_mora),
            'cantidad' = length(ID)) %>% 
  mutate('%' = cantidad/nrow(data)*100)

ggplot(data, aes(x=Dias_mora, y=SALDO_A_FECHA))+
  geom_point()


ggplot(dat, aes(x=Dias_mora, y=SALDO_A_FECHA, color = Sector))+
  geom_point()

G3 <- data %>% filter(SALDO_A_FECHA < 5e+10) %>% 
  ggplot(aes(x=Dias_mora, y=SALDO_A_FECHA, color = Sector))+
  geom_point()

blankPlot <- ggplot()+geom_blank(aes(1,1))+
  theme(plot.background = element_blank(), 
        panel.grid.major = element_blank(),
        panel.grid.minor = element_blank(), 
        panel.border = element_blank(),
        panel.background = element_blank(),
        axis.title.x = element_blank(),
        axis.title.y = element_blank(),
        axis.text.x = element_blank(), 
        axis.text.y = element_blank(),
        axis.ticks = element_blank()
  )

library("gridExtra")
grid.arrange(G1, blankPlot, G3, G2, 
             ncol=2, nrow=2, widths=c(3,2), heights=c(2,3))

grid.arrange(G1, G2, G3, G4, 
             ncol=2, nrow=2, widths=c(3,2), heights=c(2,3))

data %>% ggplot(aes(ID,Dias_mora)) +
  geom_point(col="#009E73")

G5 <- data %>% ggplot(aes(ID,Dias_mora)) +
  geom_point()

data %>% filter(Dias_mora > 4000) %>% 
  nrow()

data %>% filter(Dias_mora <= 0) %>% 
  nrow()

data %>% filter(SALDO_A_FECHA == 0) %>% 
  nrow()

G6 <- data %>% ggplot(aes( x=ID, y=Sector, color=Categoria)) +
  geom_point()
unique(data$Sector)

grid.arrange(G1, G2, G3, G4, G5, G6,
             ncol=3, nrow=2)

##Covariables______________________________________________________________________

data <- data[order(data$FECHA_VTO, decreasing = FALSE), ]
data <- data[order(data$NRO_FACTURA, decreasing = FALSE), ]
data <- data %>% mutate('Fact+Reciente' = duplicated(NRO_FACTURA))
fact <- data %>% 
  filter(data$'Fact+Reciente' == 'FALSE') %>% 
  select(SALDO_A_FECHA,Categoria,Sector)

fact <- fact %>% mutate('Pagado' = ifelse(SALDO_A_FECHA <= 0,'No','Si'))
colnames(fact)
str(fact)
fact$Categoria <- factor(fact$Categoria,
                         levels = unique(fact$Categoria))
fact$Sector <- factor(fact$Sector,
                         levels = unique(fact$Sector))
fact$Pagado <- factor(fact$Pagado,
                         levels = unique(fact$Pagado))
str(fact)

#fact %>% group_by(Sector) %>% 
#  summarise(N_Morosos= count(Moroso),
#            '%' = N_Morosos/nrow(fact)*100,
#            Saldo = sum(SALDO_A_FECHA))

#fact %>% group_by(Categoria) %>% 
#  summarise(N_Morosos= sum(Moroso),
#            '%' = N_Morosos/nrow(fact)*100,
#            Saldo = sum(SALDO_A_FECHA))

table(fact$Pagado)
catxsec <- table(fact$Categoria,fact$Sector)
catxsecxPag <- table(fact$Categoria,fact$Sector,fact$Pagado)
table(fact$Categoria,fact$Pagado)
table(fact$Sector,fact$Pagado)
#catxsecxPag

round(catxsecxPag[ , ,1]/catxsec*100,2)


#Partición
test_index <- createDataPartition(fact$Pagado, times = 1, p = 0.5, list = FALSE)
train_set <- fact %>% slice(-test_index)
test_set <- fact %>% slice(test_index)
#Model_NB
fmla <- as.formula(paste("Pagado ~ ", paste("Categoria","Sector",sep = "+")))
Model_NB <- naiveBayes(fmla,data=train_set)
summary(Model_NB)
Prediction_NB <- predict(object = Model_NB, newdata = test_set)#, type = "raw")
#Metrics
#confusionMatrix(Prediccion_NB, test_set$Pagado)$overall[["Accuracy"]]
confusionMatrix(Prediction_NB, test_set$Pagado)

#table(Prediccion_NB,test_set$Pagado)

#HotEncoding
y <- train_set$Pagado
y_control <- test_set$Pagado
train_HEncod <- data.frame(predict(dummyVars(" ~ Categoria+Sector", data = train_set), newdata = train_set))
test_HEncod <- data.frame(predict(dummyVars(" ~ Categoria+Sector", data = test_set), newdata = test_set))

#Model_LR
Model_LR <- glm(y ~ ., data = train_HEncod, family = "binomial")
summary(Model_LR)
Prediction_LR <- predict(Model_LR,test_HEncod, type = "response", na.action = na.pass)
#Desicion Rule
plot(y_control,Prediction_LR)
Prediction_LR_Fitted <- factor(ifelse(Prediction_LR < 0.2,'Si','No'),levels = c('Si','No'))
str(Prediction_LR_Fitted)
#Metrics
#confusionMatrix(Prediction_LR_Fitted, y_control)$overall[["Accuracy"]]
confusionMatrix(Prediction_LR_Fitted,y_control)
#table(Prediction_LR_Fitted,y_control)

#
