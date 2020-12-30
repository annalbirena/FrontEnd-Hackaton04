
Algoritmo ejercicio12
	
	Definir salario_inicial, salario_final,x Como Real
	
	x = 1
	
	Escribir "Ingrese salario inicial"
	Leer salario_inicial
	
	Escribir "Ingrese porcentaje de aumento"
	Leer incremento
	
	Mientras x<=6 Hacer
		
		salario_final = salario_inicial + (salario_inicial*(incremento/100))
		salario_inicial= salario_final
		Escribir "Su salario al año ", x, " es: " salario_final
		x= x+1
		
	Fin Mientras
	
FinAlgoritmo
