class Animal {
    constructor(nombre, peso) {
        this.nombre = nombre;
        this.peso = peso;
    }
    correr(){
        console.log(`El esta corriendo y se llama ${this.nombre}, pesa ${this.peso} y su color es ${this.color}`)
    }
}
class Gato extends Animal {
    constructor(nombre, peso, color) {
        super(nombre, peso)
        this.color = color
    }

    correr(){
        console.log(`${this.nombre} ${this.peso} ${this.color}`)
    }

}
let objeto_1 = new Gato("Leo","5Kg","Blanco");
let objeto_2 = new Animal("Leo","5Kg","Blanco");
objeto_1.correr();
objeto_2.correr();