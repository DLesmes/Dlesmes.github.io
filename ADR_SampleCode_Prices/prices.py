import time
import matplotlib as mpl
import matplotlib.dates as mdates
import matplotlib.pyplot as plt
import numpy as np
import pandas as pd
import seaborn as sns

from sqlalchemy import create_engine, text
from datetime import datetime as dt

if __name__ == '__main__':
	engine = create_engine('postgres://postgres:postADS4#@192.99.145.205:54328/ADR_DS4A')
	precios_df = pd.read_sql_table(
	    "adr_corabastos_prices",
	    con=engine)
	precios_df.columns = ['id','Fecha', 'Categorias','Producto','Presentación','Cantidad','Unidad','Precio Calidad Extra','Precio Calidad Primera','Precio Calidad Corriente','Precio Grandes Superficies']
	precios_df['Mes'] = pd.DatetimeIndex(precios_df['Fecha']).month
	precios_df['Day'] = pd.DatetimeIndex(precios_df['Fecha']).dayofyear
	precios_df['Day_m'] = pd.DatetimeIndex(precios_df['Fecha']).day
	precios_df['Period'] = pd.to_datetime(precios_df['Fecha']).dt.to_period("M")
	ipc = pd.read_sql_table(
	    "adr_ipc",
	    con=engine)
	ipc['Period'] = ipc['ipc_fecha'].dt.to_period("M")
	current_ipc = float(ipc[ipc['ipc_fecha']==dt.today().strftime("20%y-%m-01")]['ipc_valor'])
	period = str(ipc[ipc['ipc_valor']==current_ipc]['Period'].iloc[0])
	df_corriente = precios_df.merge(ipc, on="Period", how='left')
	df_corriente['Precio (pesos corrientes)'] = df_corriente['Precio Calidad Extra']/df_corriente['ipc_valor']*current_ipc
	#input
	feature = input('Por favor  indicame cual  de los siguientes productos deseas analizar? {}:'.format(list(df_corriente['Producto'].unique())))

	df_corriente = df_corriente[df_corriente['Producto']==feature]
	presentacion = str(df_corriente.iloc[0,4])
	df_producto_boxplot = pd.pivot_table(df_corriente, values=['Precio (pesos corrientes)'], columns=['Mes'], index=['Day_m'], aggfunc=[np.mean])
	df_producto_boxplot.columns = ("Ene","Feb","Mar","Abr","May","Jun","Jul","Ago","Sep","Oct","Nov","Dic")
	df_producto_mean = pd.pivot_table(df_corriente, values=['Precio (pesos corrientes)'], index=['Mes'], aggfunc=[np.mean])

	fig, ax = plt.subplots(figsize=(15, 5))
	df_producto_boxplot.boxplot(showfliers=False)
	#ax.boxplot(df_producto_boxplot, showfliers=False)
	#ax.violinplot(df_producto_boxplot, showmeans=False, showmedians=True)
	ax.yaxis.grid(True)
	plt.plot(df_producto_mean,color='r',alpha=0.6,label="Promedio mensual")
	ax.yaxis.grid(True)
	plt.title('{} / Rango de 8 años / pesos de {}'.format(feature, period))
	ax.set_xlabel("Mes")
	ax.set_ylabel("PRECIO/"+ presentacion)
	ax.legend(loc="upper right", title="Precios", frameon=False)
	round(df_producto_mean,2)
	plt.show()

