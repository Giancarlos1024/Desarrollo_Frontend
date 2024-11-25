//APRENDIENDO LA ESTRUCTURA DE CONTORL SWITCH

//Ejercicio 2: Quiero hacer un programa que me muestre el dia de la semana,
// validando el dia de la semana y que me muestre.

let validacion_numero = 1;

switch(validacion_numero){
    case 1:
        console.log(`El numero ingresado es igual a ${validacion_numero}`)
    break;
    case "martes":
        console.log(`Hoy es ${validacion_numero}`)
    break;
    case "miercoles":
        console.log(`Hoy es ${validacion_numero}`)
    break;
    case "jueves":
        console.log(`Hoy es ${validacion_numero}`)
    break;
    case "viernes":
        console.log(`Hoy es ${validacion_numero}`)
    break;
    case "sabado":
        console.log(`Hoy es ${validacion_numero}`)
    break;
    case "domingo":
        console.log(`Hoy es ${validacion_numero}`)
    break;
    default:
        console.log(`Error, ingrese un valor valido ${validacion_numero}`)
    break

}