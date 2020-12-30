/*
        Ejercicio1
        Utilizando función arrow, crear una función que reciba como parámetros un
        nombre, apellido y edad y los retorne en un string concatenado.
        */
       e1_concat = (nombre,apellido,edad) => 
       console.log('Hola mi nombre es '+nombre+' '+apellido+' y mi edad es '+edad);

       e1_concat('Anna','Albirena','25');

       /*
       Ejercicio2
       Cree una función que tome números y devuelva la suma de sus cubos.
       */
       sumofcubes = (...numbers) => {
           let e2_sum = 0;
           for (i=0; i < numbers.length; i++){
               e2_sum = e2_sum + Math.pow(numbers[i],3);
           }
           return console.log(e2_sum);
       }

       sumofcubes(1,5,9,1);
     
       /*
       Ejercicio3
       Crear una funcion que me retorne el tipo de valor entregado.
       */
       function e3_typeof(input){
           return console.log(typeof input);
       }

       e3_typeof([1,4,5,5]);

       /*
       Ejercicio4
       Crear una función que reciba n cantidad de argumentos y los sume.
       */
       function e4_sumar(...numbers){
           return console.log(numbers.reduce((acumulador, siguiente) => acumulador + siguiente));
       }

       e4_sumar(1,4,5,5,5);

       /*
       Ejercicio5
       Crear una función que reciba una matriz de valores y filtre los valores que no
       son string
       */
       function e5_nostring(elemento){
           return typeof elemento !== 'string'
       }

       function e5_filtrar(array){
           return array.filter(e5_nostring);
       }

       console.log(e5_filtrar([1,2,'Martha',3,5,'Hola',null]));

       /*
       Ejercicio6
       Cree una función que tome una matriz de números y devuelva los números
       mínimos y máximos, en ese orden.
       */
       function e6_minMax(array){
           return console.log([Math.min(...array), Math.max(...array)]);
       }

       e6_minMax([1, 2, 3, 4, 5]);

       /*
       Ejercicio7
       Escriba una función que tome una matriz de 10 enteros (entre 0 y 9) y devuelva
       una cadena en forma de un número de teléfono
       */
       function e7_telefono (array){
           let number = array.join('');
           let codigo = number.slice(0,3);
           let telef_ini = number.slice(3,6);
           let telef_fin = number.slice(6,10);

           return console.log('('+codigo+')'+' '+telef_ini+'-'+telef_fin);
       }

       e7_telefono([1,2,3,4,5,6,7,8,9,0]);

       /*
       Ejercicio8
       Cree una función que tome una matriz de matrices con números. Devuelve una
       nueva matriz (única) con el mayor número de cada uno.
       */
       function e8_findLargestNums(array){
           const e8_prueba = [];
           array.forEach(element => e8_prueba.push(Math.max(...element)));
           return console.log(e8_prueba);
       }

       e8_findLargestNums([[4, 2, 7, 1], [20, 70, 40, 90], [1, 2, 0],[5, 5, 8]]);

      /*
       Ejercicio9
       Dada una palabra, escriba una función que devuelva el primer índice y el último
       índice de un carácter.
       */
      function e9_charIndex (cadena, letter){
           return console.log(cadena.indexOf(letter)+","+cadena.lastIndexOf(letter));
      }

      e9_charIndex("hello","l");

      /*
       Ejercicio10
       Escriba una función que convierta un objeto en una matriz, donde cada elemento 
       representa un par clave-valor.
       */
      function e10_toArray(object){
           return Object.entries(object);
      }

      function e10_main(){
           let e10_objeto = {
                       a: 1,
                       b: 2
                       };
           return console.log(e10_toArray(e10_objeto));
      }

      e10_main();

       /*
       Ejercicio11
       Cree la función que toma una matriz con objetos y devuelve la suma de los
       presupuestos de las personas.
       */
       function e11_sumofbudget(array){
           let sum = 0;
           for (i = 0; i<array.length; i++){
               sum = sum + array[i].budget;
           }
           return 'La suma de los presupuesto es: '+sum;
       }

       function e11_main(){
           let getBudgets = [
                               { name: "John", age: 21, budget: 23000 },
                               { name: "Steve", age: 32, budget: 40000 },
                               { name: "Martin", age: 16, budget: 2700 }
                           ];
           return console.log(e11_sumofbudget(getBudgets));
       }

       e11_main();

       /*
       Ejercicio12
       Cree una función que tome una matriz de estudiantes y devuelva una matriz de
       nombres de estudiantes.
       */
       let StudentNames = [
                               { name: "Steve" },
                               { name: "Mike" },
                               { name: "John" }
                               ];
       
       function getnames(array){
           let e12_students = [];
           array.forEach(element => e12_students.push(element.name));
           return console.log(e12_students);
       }

       getnames(StudentNames);

       /*
       Ejercicio13
       Escriba una función que convierta un objeto en una matriz de claves y valores.
       */
       function e13_toArray(object){
           return Object.entries(object);
       }

       function e13_main(){
           let e10_objeto = {
                               likes: 2,
                               dislikes: 3,
                               followers: 10
                       };
           return console.log(e13_toArray(e10_objeto));
       }

       e13_main();

       /*
       Ejercicio14
       Cree una función donde, dado el número n, devuelva la suma de todos los
       números cuadrados incluyendo n.
       */
       function e14_squaresSum(num){
           let sum = 0, i = 1;
           do {
               sum = sum + Math.pow(i, 2);
               i = i + 1;
               } while (i <= num);

           return console.log(sum);
       }

       e14_squaresSum(3);

       /*
       Ejercicio15
       Cree una función para multiplicar todos los valores en una matriz por la
       cantidad de valores en la matriz dada.
       */
       function e8_multiplyByLength(array){
           let e14_prueba = [];
           array.forEach(element => e14_prueba.push(element * array.length));
           return console.log(e14_prueba);
       }

       e8_multiplyByLength([2, 3, 1, 0]);

       /*
       Ejercicio16
       Cree una función que tome un número como argumento y devuelva una matriz
       de números contando desde este número a cero.
       */
       function e16_countdown(num){
           let e16_prueba = [];
           for (i=num; i>=0; i--){
               e16_prueba.push(i);

           }
           return console.log(e16_prueba);
       }
       
       e16_countdown(8);

       /*
       Ejercicio17
       Cree una función que tome una matriz y devuelva la diferencia entre los
       números más grandes y más pequeños.
       */
       function e17_diffMaxMin(array){
           return Math.max(...array)-Math.min(...array);
       }

       console.log(e17_diffMaxMin([10, 4, 1, 4, -10, -50, 32, 21]));

       /*
       Ejercicio18
       Cree una función que filtre las cadenas de una matriz y devuelva una nueva
       matriz que solo contenga enteros
       */
       function e18_esnumero(elemento){
           return typeof elemento === 'number'
       }

       function e18_filterList(array){
           return array.filter(e18_esnumero);
       }
       
       console.log(e18_filterList([1, 2, 3, 'x', 'y', 10]));

       /*
       Ejercicio19
       Cree una función que tome dos argumentos (elemento, tiempos). El primer
       argumento (elemento) es el elemento que necesita repetirse, mientras que el
       segundo argumento (veces) es la cantidad de veces que se debe repetir el
       elemento. Devuelve el resultado en una matriz.
       */
       function e19_repeat(num,cant){
           let e19_array = [];
           for (i=0; i<cant; i++){
               e19_array.push(num);
           }
           return e19_array;
       }
       
       console.log(e19_repeat(13,5));

       /*
       Ejercicio20
       Escriba una función que reemplace todas las vocales en una cadena con una vocal especifica.
       */
       function e20_replace(string, word){
           return string.replace(/[aeiou]/ig,word);
       }

       console.log(e20_replace('apples and bananas','u'));

       /*
       Ejercicio21
       Te dan una cadena de palabras. Debe encontrar la palabra "Nemo" y devolver
       una cadena como esta: "¡Encontré a Nemo en [el orden de la palabra que
       encuentra nemo]!"
       */
       function e21_findNemo (string){
           let e21_array = string.split(" ");
           let index = e21_array.indexOf('Nemo')+1;
           return 'I found Nemo at '+index+'!';

       }
       console.log(e21_findNemo('I am finding Nemo !'));

       /*
       Ejercicio22
       Cree una función que capitalice la última letra de cada palabra
       */
       function e22_capLast(string){
           let indexCapLetter = string.length-1;
           let partini = string.substr(0,indexCapLetter);
           let capletter = string.charAt(indexCapLetter).toUpperCase();
           return partini+capletter;
       }

       console.log(e22_capLast('albirena'));