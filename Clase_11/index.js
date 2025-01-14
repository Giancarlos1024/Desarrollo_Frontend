// APRENDIENDO MANEJO DE ERRORES

// try {
//     let numero_1 = 200;
//     let numero_2 = 400;
//     let numero_3 = 200;
//     let resultado = numero_1 + numero_2 + numero_3;
//     console.log(resultado)
// } catch (error) {
//     console.error("Error", error.message);
// }

//COMO CREAR UNA PROMESA
// const fetchData = () =>{
//     return new Promise((resolve, reject) =>{
//         setTimeout(() =>{
//             let valor = false
//             if(valor){
//                 resolve("todo funciona correctamente")
//             }else{
//                 reject("error")
//             }

//         },1000)
//     })
// }

// fetchData()
//     .then((data) => console.log(data))
//     .catch((error) => console.error(error))

//COMO CREAR UNA PROMESA CON ASYNC AWAIT

// const animales = [
//     {
//         nombre:"perro",
//     },
//     {
//         nombre:"gato",
//     }
// ]

// // const animales = []

// const fetchData = () =>{
//     return new Promise((resolve, reject) =>{
//         setTimeout(() =>{
//             if(animales.length != 0){
//                 resolve("todo funciona correctamente")
//             }else{
//                 reject(new Error("No hay datos"))
//             }

//         },1000)
//     })
// }

// const fetchDataAll = async() =>{
//     try{
//         let data = await fetchData()
//         console.log(data)
//     }catch(error){
//         console.error(error.message)
//     }
// }

// fetchDataAll();


//APRENDIENDO A CONSUMIR UNA API

//FETCH BASICO

// fetch("https://jsonplaceholder.typicode.com/photos")
//     .then(response => response.json())
//     .then(data => console.log(data.slice(0,3)))

//FETCH AVANZADO

// const Datos = async() =>{
//     try{
//         let data = await fetch('https://jsonplaceholder.typicode.com/users')
//         console.log(data)
//         if(!data.ok){
//            throw new Error("fallo la peticion a la api") 
//         }

//         const datosParceados = await data.json()
//         console.log(datosParceados.slice(0,2))

//     }catch(error){
//         console.error(error.message)
//     }
// }
// Datos()

// fetch("https://jsonplaceholder.typicode.com/users")
//     .then(response => response.json())
//     .then(datos => {
//         let contenedorDatos = document.getElementById("contenedor")

//         datos.forEach(data => {
//             let li_data = document.createElement("li")
//             li_data.innerHTML = `${data.username} - ${data.email} - ${data.phone}`
//             contenedorDatos.appendChild(li_data);
//         });

//     })