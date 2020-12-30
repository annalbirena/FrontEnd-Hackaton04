Algoritmo ejercicio14
	Definir color Como Caracter
	Definir cant,verde, blanco, rojo, x Como Entero
	
	verde= 0
	blanco=0
	rojo=0
	x=1
	
	Escribir "Ingrese la cantidad de focos"
	Leer cant
	
	Mientras x<=cant Hacer
		
		Escribir "Ingrese color de foco V/B/R"
		Leer color
		
		Si color == "V" Entonces
			verde=verde+1
		SiNo
			Si color == "B" Entonces
				blanco=blanco+1
			SiNo
				rojo=rojo+1
			Fin Si
		Fin Si
		
		x=x+1
	Fin Mientras
	
	Escribir "La cantidad de focos verdes es: " verde
	Escribir "La cantidad de focos blancos es: " blanco
	Escribir "La cantidad de focos rojos es: " rojo
	
FinAlgoritmo
