Attribute VB_Name = "Módulo1"
''' card game'''
''' Coded by Diego Lesmes https://www.linkedin.com/in/diegolesmes-lnkdn/
'''the variable to use are defined
''' test is each grab for the player
''' inicio is the start time
''' mason are the positional vector were is record when the player use this deck of cards
''' conteon are the meter of the sequence that belongs to each deck of cards
Dim test As Integer
Dim inicio As Variant
Dim maso1(100), maso2(100), maso3(100), maso4(100), maso5(100), castigos(100) As Variant
Dim conteo1, conteo2, conteo3, conteo4, conteo5 As Integer
Sub limpiar()
''' clean the showed cards, the time and the tries
''' Restart the graps and the start time
''' Clean he positional vector and the meter
Sheets("Inicio").Select
Range("12:12").ClearContents
Range("p3").ClearContents
Range("j19").ClearContents
test = 0
inicio = 0
For a = 0 To UBound(maso1)
    maso1(a) = ""
    maso2(a) = ""
    maso3(a) = ""
    maso4(a) = ""
    maso5(a) = ""
    castigos(a) = ""
Next
conteo1 = 0
conteo2 = 0
conteo3 = 0
conteo4 = 0
conteo5 = 0
End Sub
Sub results()
''' in the result page, clean preios rults of the last game, and print the current results,
'''but send to the home page
    Sheets("Resultados").Select
        Application.ScreenUpdating = False
        Application.EnableEvents = False
    Range("c5:bd10").ClearContents
    Range("c10").Resize(1, UBound(maso1) - 1).Value = maso1
    Range("c9").Resize(1, UBound(maso1) - 1).Value = maso2
    Range("c8").Resize(1, UBound(maso1) - 1).Value = maso3
    Range("c7").Resize(1, UBound(maso1) - 1).Value = maso4
    Range("c6").Resize(1, UBound(maso1) - 1).Value = maso5
    Range("c5").Resize(1, UBound(maso1) - 1).Value = castigos
    Sheets("Wlcom").Select
End Sub
Sub time()
''' start the time meter and print the game current time
If inicio = 0 Then
    inicio = Now()
End If
    Range("p3").Value = Now() - inicio
End Sub
Sub option1()
''' increase the meter in each try and print the reward in his own deck.
''' records every penalty in castigos vector
''' uopdate the time and the tries cells
conteo1 = conteo1 + 1
Range("d12").Value = Sheets("Secuencias").Cells(conteo1 + 1, 2).Value
test = test + 1
maso1(test - 1) = 1
If Range("d12").Value < 0 Then
    castigos(test - 1) = 1
End If
Range("j19").Value = "intentos: " & test
time
For i = 1 To 6 ' Loop 3 times.
    Beep
    Beep ' Sound a tone.
Next i
End Sub
Sub option2()
''' increase the meter in each try and print the reward in his own deck.
''' records every penalty in castigos vector
''' update the time and the tries cells
conteo2 = conteo2 + 1
Range("g12").Value = Sheets("Secuencias").Cells(conteo2 + 1, 3).Value
test = test + 1
maso2(test - 1) = 1
If Range("g12").Value < 0 Then
    castigos(test - 1) = 1
End If
Range("j19").Value = "intentos: " & test
time
For i = 1 To 6 ' Loop 3 times.
    Beep ' Sound a tone.
Next i
End Sub
Sub option3()
''' increase the meter in each try and print the reward in his own deck.
''' records every penalty in castigos vector
''' update the time and the tries cells
conteo3 = conteo3 + 1
Range("j12").Value = Sheets("Secuencias").Cells(conteo3 + 1, 4).Value
test = test + 1
maso3(test - 1) = 1
If Range("j12").Value < 0 Then
    castigos(test - 1) = 1
End If
Range("j19").Value = "intentos: " & test
time
For i = 1 To 6 ' Loop 3 times.
    Beep ' Sound a tone.
Next i
End Sub
Sub option4()
''' increase the meter in each try and print the reward in his own deck.
''' records every penalty in castigos vector
''' update the time and the tries cells
conteo4 = conteo4 + 1
Range("m12").Value = Sheets("Secuencias").Cells(conteo4 + 1, 5).Value
test = test + 1
maso4(test - 1) = 1
If Range("m12").Value < 0 Then
    castigos(test - 1) = 1
End If
Range("j19").Value = "intentos: " & test
time
For i = 1 To 6 ' Loop 3 times.
    Beep ' Sound a tone.
Next i
End Sub
Sub option5()
''' increase the meter in each try and print the reward in his own deck.
''' records every penalty in castigos vector
''' update the time and the tries cells
conteo5 = conteo5 + 1
Range("p12").Value = Sheets("Secuencias").Cells(conteo5 + 1, 6).Value
test = test + 1
maso5(test - 1) = 1
If Range("p12").Value < 0 Then
    castigos(test - 1) = 1
End If
Range("j19").Value = "Intentos: " & test
time
For i = 1 To 6 ' Loop 3 times.
    Beep ' Sound a tone.
Next i
End Sub
