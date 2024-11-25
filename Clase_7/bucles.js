// APRENDIENDO BUCLES → FOR, WHILE, DO WHILE


// FOR

// let numeros = [1,2,3,4,5,6,7,8,9,10]

// for(let i = 0; i < numeros.length ; i++){

//     console.log(`Numero : ${numeros[i]}`)

// }
//WHILE

// let index = 0;

// while(index < 20){
//     console.log(`Numero : ${index}`)
//     index++
// }


//DO WHILE

// let index2 = 1
// do{
//     console.log(`Numeros Impares: ${index2}`)
//     index2 = index2 + 2
// }while(index2 < 3)

//BUCLE FOREACH

let arrays = ["giancarlos",true,[1,2,3],{nombre:"fernando"},50];

arrays.forEach(element =>{
    console.log(element);
})


//RECORRER UN OBJETO CON FOR IN

const object = {
    nombre:"giancarlos",
    apellido:"velasquez"
}

for (const key in object) {
    const element = object[key];
    console.log(element)  
}
