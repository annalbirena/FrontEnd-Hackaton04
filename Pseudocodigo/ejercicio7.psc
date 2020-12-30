Algoritmo Ejercicio7
	
	Definir pedidos,x Como Entero
	Definir metros, pulgadas Como Real
	
	x=1
	
	Escribir "Cuantos pedidos desea realizar"
	Leer pedidos
	
	Mientras x <= pedidos Hacer
		Escribir "Ingrese los metros del pedido " x
		Leer metros
		
		pulgadas = metros/0.0254
		
		Escribir "Las pulgadas de tela son: " pulgadas
		x=x+1
	Fin Mientras
	
FinAlgoritmo
