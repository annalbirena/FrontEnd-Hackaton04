
//Ejercicio1

function sumar(a,b){
    return a+b;
}

function obtener_sumandos(){
    num1 = parseFloat(prompt('Ingresa un numero'));
    num2 = parseFloat(prompt('Ingresa un numero'));
}

obtener_sumandos();
console.log(sumar(num1,num2));

//Ejercicio2

function promedio(suma_notas,cant_notas){
    return suma_notas/cant_notas;
}

function obtener_notas(){
    for(let x = 0; x <cant; x++){
    let nota = prompt('Ingresa nota');
    suma += parseFloat(nota);
    } 
}

var cant = prompt('Ingrese Cantidad de Notas');
var suma = 0;
obtener_notas();
console.log(promedio(suma,cant));

//Ejercicio 3,4 y 5

function area_rect(base,altura){
    return base * altura;
}
function area_tri(base,altura){
    return (base * altura)/2;
}
function area_circ(radio){
    return Math.PI * (Math.pow(radio,2)); //Funcion de potencia Math.pow(radio,2)
}

alert("Tipo de Operacion: 1.Rectangulo 2.Triangulo 3.Circunferencia");
var operacion = prompt('Ingresa numero de operacion');

switch(operacion) {
    case '1':  
        var b = prompt('Ingresa base');
        var h = prompt('Ingresa altura');
        console.log(area_rect(b,h));
        break;
    case '2':  
        var b = prompt('Ingresa base');
        var h = prompt('Ingresa altura');
        console.log(area_tri(b,h));
        break;
    case '3':  
        var r = prompt('Ingresa radio');
        console.log(area_circ(r));
        break;
}

//Ejercicio 6

function sueldo(horas, salario){
    return (horas * salario) * 6; //6 dias laborables por semana
}

var hora = parseInt(prompt('Ingresa horas'));
var salario = parseFloat(prompt('Ingresa salario hora/hombre'));

console.log("El sueldo semanal es: ",sueldo(hora,salario));

//Ejercicio7

function conversor(metros){
    return  metros/0.0254;
}

function obtener_pedidos_en_metros(){
   for(let x = 0; x <cant_pedidos; x++){
       pedido_metros[x] = prompt("Ingresa los metros del pedido");
       pedido_pulgadas[x] = conversor(pedido_metros[x]);
   }
}
function resultado(){
   for(let x = 0; x <cant_pedidos; x++){
       console.log(pedido_metros[x]+' metros de tela en pulgadas es: '+pedido_pulgadas[x]);
   }
}

var cant_pedidos = prompt('Ingrese cantidad de pedidos');
var pedido_metros = new Array(cant_pedidos);
var pedido_pulgadas = new Array(cant_pedidos);

obtener_pedidos_en_metros();
resultado();

//Ejercicio8

function conversor_dolar(soles){
    return  soles/3.5;
}

var soles = prompt('Ingresa el monto en soles')
var dolares = conversor_dolar(soles);

console.log("El monto en dolares es",dolares)

//Ejercicio9

function calcular_edad(yact,ynac){
    return yact - ynac;
}

var yact = parseInt(prompt('Ingresa el año actual'));
var ynac = parseInt(prompt('Ingresa el año de nacimiento'));

console.log("La edad es: ",calcular_edad(yact,ynac))

//Ejercicio10
function obtener_edades(){
    for(let x = 0; x <3; x++){
        nombre[x] = prompt("Ingresa nombre");
        edad[x] = prompt("Ingresa edad");
    }
}
function hallar_menor(){
    if (edad[0]< edad[1] && edad[0]< edad[2]){
        console.log("El menor es: " + nombre[0] + " con "+ edad[0] + " de edad ");
    } else{
        if (edad[1]< edad[0] && edad[1]< edad[2]){
        console.log("El menor es: " + nombre[1] + " con "+ edad[1] + " de edad ");
        } else{
            console.log("El menor es: " + nombre[2] + " con "+ edad[2] + " de edad ");
        }
    }
}

var nombre = new Array(3);
var edad = new Array(3);
obtener_edades();
hallar_menor();

//Ejercicio11
function calcular_bono(ycant){
    switch(ycant) {
            case '1':
                return 100;
                break;
            case '2':  
                return 200;
                break;
            case '3':
                return 300;
                break;
            case '4':  
                return 400;
                break;
            case '5':
                return 500;
                break;
            default:
                return 1000;
            }
   } 

   var cant = prompt('Ingresa años laborando');
   console.log(calcular_bono(cant));

//Ejercicio12
function salario_incremento (salario, incremento){
    return salario*(incremento/100)
}

function resultado(){
    do {  
        salario_final = salario + salario_incremento (salario, incremento)
        salario= salario_final 
        console.log("Su salario el año "+i+" es "+salario_final)
        i += 1;} 
    while (i < 7);
}

var salario = parseFloat(prompt('Ingresa salario inicial'));
var incremento = parseFloat(prompt('Ingresa porcentaje de incremento'));
var i = 1;

resultado();

//Ejercicio13
function contar_aprobados(cant_alumnos){
    for(let x = 0; x <cant_alumnos; x++){
        if(nota[x]>10){
            aprobados = aprobados + 1;
        }else{
            desaprobados = desaprobados + 1;
        }
    }
}

function obtener_notas(){
    for(let x = 0; x <cant_alumnos; x++){
    nombre[x] = prompt("Ingresa nombre");
    nota[x] = prompt("Ingresa nota");
    }
}

var cant_alumnos = parseInt(prompt('Ingrese cantidad de alumnos'));
var nombre = new Array(cant_alumnos);
var nota = new Array(cant_alumnos);
var aprobados = 0;
var desaprobados = 0;

obtener_notas();
contar_aprobados(cant_alumnos);
console.log("La cantidad de alumnos aprobados es: "+aprobados);
console.log("La cantidad de alumnos desaprobados es: "+desaprobados);

//Ejercicio14
function contar_color_de_focos(cant_focos){
    for(let x = 0; x <cant_focos; x++){
        if(foco_color[x] == 'V'){
            verde = verde + 1;
        }else{
            if(foco_color[x] == 'B'){
                blanco = blanco + 1;
            }else{
                rojo = rojo + 1;
            }
        }
    }
}

function obtener_color_de_focos(){
    for(let x = 0; x <cant_focos; x++){
        foco_color[x] = prompt("Ingrese inicial de color de foco V=Verde, B=Blanco, R=Rojo");
        console.log(foco_color[x]);
    }
}

var cant_focos = parseInt(prompt('Ingrese cantidad de focos'));
var foco_color = new Array(cant_focos);
var verde = 0;
var blanco = 0;
var rojo = 0;

obtener_color_de_focos();
contar_color_de_focos(cant_focos);
console.log("La cantidad de focos verdes es: "+verde);
console.log("La cantidad de focos blancos es: "+blanco);
console.log("La cantidad de focos rojos es: "+rojo);

//Ejercicio15
function mayor_de_edad(edad){
    if(edad>=18){
        return 'Apto para votar';
    }else{
        return 'No apto para votar';
    }
}
var edad = parseInt(prompt('Ingrese edad'));
console.log(mayor_de_edad(edad));










