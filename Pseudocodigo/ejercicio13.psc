Algoritmo ejercicio13
	
	Definir cant, x, aprobados, desaprobados Como Entero
	Definir nota Como Real
	
	aprobados = 0
	desaprobados = 0
	
	Escribir "Ingrese la cantidad de alumnos"
	Leer cant
		
	Para x<-1 Hasta cant Con Paso 1 Hacer
		Escribir "Ingrese nota"
		Leer nota
		
		Si nota>10 Entonces
			aprobados = aprobados+1
		SiNo
			desaprobados = desaprobados+1
		Fin Si
	Fin Para
	
	Escribir "El numero de aprobados es: " aprobados
	Escribir "El numero de desaprobados es: " desaprobados
	
FinAlgoritmo
