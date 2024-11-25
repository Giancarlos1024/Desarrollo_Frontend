// APRENDIENDO FUNCIONES CON JAVASCRIPT

//FUNCION NORMAL

// function Suma(){
//     let numero_1 = 10;
//     let numero_2 = 10;
//     let suma = numero_1 + numero_2;
//     console.log(`La suma de los numeros ${numero_1} + ${numero_2} = ${suma}`)
// }

// Suma(); // LLAMANDO A LA FUNCION Suma()

//FUNCION DE FLECHA

// const Resta = () => {
//     let valor1 = 50;
//     let valor2 = 20;

//     return valor1 - valor2;
// }

// let resultado = Resta();

// console.log(resultado)

// FUNCION FECHA CON PARAMETROS

const datosPersona = (nombre, apellido, edad) => {

    console.log(`La persona se llama : ${nombre} ${apellido} y tiene ${edad} años`)
}

datosPersona("Fernando","Garcia",30)
