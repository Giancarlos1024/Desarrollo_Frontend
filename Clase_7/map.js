// APRENDIENDO A USAR EL METODO MAP()

//MAP()

const personas = ["giancarlos", "fernando", "hugo"]

const datos = personas.map( persona => persona == "fernando")

datos.forEach(elemento =>{
    if(elemento == true){
        console.log("existe")
    }
    
})

// FILTER()

// const numeros = [1,2,3,4,5,6]

// const datos = numeros.filter(numero => numero % 2 == 0)

// console.log(datos)
