
/*CREANDO VARIABLES */

// let nombre = "fernando";
// var apellido = 'garcia';
// const pi = 3.1416;
// edad = 28;

// console.log(`Mi nombre es : ${nombre}`)
// console.log(`Mi apellido es : ${apellido}`)
// console.log(`El valor de PI es : ${pi}`)
// console.log(`Mi edad es : ${edad}`)

// let numeroDecimal = 10.8;
// let valorBoleano = true;
// valorBoleano = false;

// console.log(numeroDecimal)
// console.log(valorBoleano)

// let persona = {
//     nombre: "nelson",
//     apellido: "valenzuela",
//     edad: 25,
//     pais : "Perú",
//     profesion :"ingeniero de software"
// }

// let nombre ='mario'
// let apellido = 'ancasi'
// console.log(persona);
// console.log("El nombre de la persona es : ",persona.nombre)
// console.log("El apellido de la persona es :",persona.apellido)
// console.log("La profesion de la persoan es :",persona.profesion)
// console.log(`El nombre completo de la persona es :${persona.nombre} ${persona.apellido}`)
// console.log(`El nombre completo de la persona es :${nombre} ${apellido}`)

// APRENDIENDO LOS TIPOS DE DATOS EN JAVASCRIPT

// let numero1 = 10;
// let genero = "masculino";
// let valorBoleano = true;

// let numeros = [1,2,3,4,5,6,7,8,9,10]

// console.log(typeof numero1)
// console.log(typeof genero)
// console.log(typeof valorBoleano)

// console.log( typeof numeros);

//OPERADORES ARITMETICOS

// //SUMA
// let num = 100
// let num2 = 200
// let resultado = num + num2;


// console.log("El resultado de la suma es : ", resultado)

// //RESTA
// let n1 = 50.45
// let n2 = 10.52
// let result = n1 - n2

// console.log(result)
// //MULTIPLICACION

// let valor_num1 = 10;
// let valor_num2 = 2;
// let result_1 = valor_num1 * valor_num2;

// console.log("la multiplicación es : ", result_1)

// //DIVISION
// let valor_1 = 40
// let valor_2 = 2
// let result_2 = valor_1 / valor_2
// console.log(`La division de ${valor_1} / ${valor_2} = ${result_2}`)


// //MODULO

// let valor_modulo_num1 = 90;
// let valor_modulo_num2 = 8;
// let resultado_modulos = valor_modulo_num1 % valor_modulo_num2;

// console.log(`La modularidad de ${valor_modulo_num1} y ${valor_modulo_num2} = ${resultado_modulos}`)



//CONDICIONES O ESTRUCTURAS DE CONTROL → IF , ELSE

//ejercicio 1: Creame un algoritmo que me muestra si una persona es mayor o menor de edad.

let edad = "0";

if(edad == 0){
    if(edad >= 18){
        console.log(`La persona es mayor de edad ${edad}`)
    }
    
    if(edad < 18){
        console.log(`La persona es menor de edad ${edad}`)
    }
}else{
    console.log("Por favor, ingrese una edad validad")
}
