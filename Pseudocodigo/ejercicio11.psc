Algoritmo ejercicio11
	
	Definir ant Como Entero
	Definir bono Como Real
	
	Escribir "Ingrese años de servicio"
	Leer ant
	
	Mientras ant >= 1 Hacer
		Segun ant Hacer
			1:
				bono = 100
			2:
				bono = 200
			3:
				bono = 300
			4:
				bono = 400
			5:
				bono = 500
			De Otro Modo:
				bono = 1000
		Fin Segun
		ant=0
	Fin Mientras
	
	Escribir "Su bono es: " bono
	
	
FinAlgoritmo
