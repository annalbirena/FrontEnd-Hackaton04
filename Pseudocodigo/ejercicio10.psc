Algoritmo Ejercicio10
	Dimension nombre[3], edad[3]
	Definir a Como Entero
	Para x<-1 Hasta 3 Con Paso 1 Hacer
		Escribir "Ingrese nombre"
		Leer nombre[x]
		Escribir "Ingrese edad"
		Leer edad[x]
	Fin Para
	
	Para  p <-1 Hasta 2 Hacer
		Si  edad[p] < edad[p + 1] Entonces
			a <- p
		sino
			a <- p + 1
		FinSi
	FinPara
	
	Escribir "El menor es: "
	Escribir  nombre[a]
	Escribir  edad[a]
	
FinAlgoritmo