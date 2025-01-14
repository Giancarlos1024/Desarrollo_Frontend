// Clase base
class Vehiculo {
    constructor(marca, modelo) {
        this.marca = marca;
        this.modelo = modelo;
    }
    // Método común que será sobrescrito por las subclases
    arrancar() {
        console.log('El vehículo está arrancando.');
    }
}
// Clase derivada Coche
class Coche extends Vehiculo {
    constructor(marca, modelo, puertas) {
        super(marca, modelo); // Llama al constructor de la clase base
        this.puertas = puertas;
    }
    // Sobrescribe el método arrancar
    arrancar() {
        console.log(`El coche ${this.marca} ${this.modelo} está arrancando. Tiene ${this.puertas} puertas.`);
    }
}
// Clase derivada Motocicleta
class Motocicleta extends Vehiculo {
    constructor(marca, modelo, tipo) {
        super(marca, modelo); // Llama al constructor de la clase base
        this.tipo = tipo;
    }
    // Sobrescribe el método arrancar
    arrancar() {
        console.log(`La motocicleta ${this.marca} ${this.modelo} de tipo ${this.tipo} está arrancando.`);
    }
}
// Función que usa polimorfismo
function iniciarVehiculo(vehiculo) {
    vehiculo.arrancar();
}
// Crear instancias de las clases derivadas
let miCoche = new Coche('Toyota', 'Corolla', 4);
let miMotocicleta = new Motocicleta('Honda', 'CBR', 'Deportiva');

// Función polimórfica
iniciarVehiculo(miCoche);        
iniciarVehiculo(miMotocicleta); 

