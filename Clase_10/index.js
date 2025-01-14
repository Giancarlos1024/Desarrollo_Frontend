//CREACION DE UNA CLASE
// class Persona{

//     //CREACION DE UN CONSTRUCTOR
//     constructor(nombre,apellido,edad){
//         this.nombre = nombre;
//         this.apellido = apellido;
//         this.edad = edad;
//     }
// }
// let persona_1 = new Persona("Fernando","Garcia",25);
// let persona_2 = new Persona("Giancarlos","Velasquez",40);
// let persona_3 = new Persona("Hugo","Valenzuela",50);

// //MOSTRAR O IMPRIMIR EL PRIMER OBJETO
// console.log(`El nombre de la persona es : ${persona_1.nombre}`);
// console.log(`El apellido de la persona es : ${persona_1.apellido}`);
// console.log(`Mi edad es : ${persona_1.edad}`)

// //MOSTRAR O IMPRIMIR EL SEGUNDO OBJETO
// console.log(`El nombre de la persona es : ${persona_2.nombre}`);
// console.log(`El apellido de la persona es : ${persona_2.apellido}`);
// console.log(`Mi edad es : ${persona_2.edad}`)

// //MOSTRAR O IMPRIMIR EL TERCER OBJETO
// console.log(`El nombre de la persona es : ${persona_3.nombre}`);
// console.log(`El apellido de la persona es : ${persona_3.apellido}`);
// console.log(`Mi edad es : ${persona_3.edad}`)


//HERENCIA

//CLASE PADRE
class Animal{
    constructor(nombre,color){
        this.nombre = nombre;
        this.color = color;
    }
    ladrar(){
        console.log("GUAGUA")
    }
}
// CLASE HIJO
class Perro extends Animal{
    constructor(nombre, raza){
        super(nombre);
        this.raza = raza
    }
    correr(){
        console.log("El perro esta corriendo")
    }
}

let perro_1 = new Perro("bobi","labrador");
console.log(perro_1.nombre);
console.log(perro_1.raza);
perro_1.ladrar();
perro_1.correr();


let perro_2 = new Animal("Laysi","blanco");
console.log(perro_2.nombre);
console.log(perro_2.color);
perro_2.ladrar();

