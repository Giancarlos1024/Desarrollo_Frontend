
// const credencialesLogin = [
//     { password:"123456"},
//     { password:"giancarlos123"},
//     { password:"123456"},
// ]

// let formularioLogin = document.getElementById("formulario-login")

// fetch("https://jsonplaceholder.typicode.com/users")
//     .then(response => response.json())
//     .then(data => {
//         datos(data);
//     })
//     .catch(error => console.error(error.message))


// const datos = (data) =>{

//     formularioLogin.addEventListener('submit',(e)=>{
//         e.preventDefault()
//         let correo = document.getElementById("email").value;
//         let password = document.getElementById("password").value;
        
//         // Función para combinar los datos
//         const combinedData = data.map((apiItem, index) => {
//             console.log(index)
//             const staticItem = credencialesLogin[index] || {}; // Asignar un objeto vacío si no hay datos estáticos
//             console.log(apiItem)
//             console.log(staticItem)
            
//             return {
//             ...apiItem,          // Propiedades del API
//             ...staticItem        // Propiedades estáticas
//             };
//         });
//         console.log(combinedData)
//         combinedData.forEach(valor =>{

//             if(valor.email == correo && valor.password == password){
//                 alert(`Logeo exitoso, bienvenido ${valor.email}`)
//                 window.location.href = "dashboard.html";
//             }
//         })
//     })
// }


const credencialesLogin = [
    {id:1,email:"giancarlos@gmail.com", password:"123456"},
    {id:2,email:"juan@gmail.com", password:"giancarlos123"},
    {id:3,email:"maicol@gmail.com", password:"123456"},
]

let formularioLogin = document.getElementById("formulario-login")

formularioLogin.addEventListener('submit',(e)=>{
    e.preventDefault()
    let correo = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    
    Login(correo, password)
})

const Login = (correo,password) =>{
    
    credencialesLogin.forEach(data =>{

        if(data.email == correo && data.password == password){
            alert(`Logeo exitoso, bienvenido ${data.email}`)
            window.location.href = "dashboard.html";
        }
    })
}


// const Array = [
//     {id:1, nombre:"giancarlos"},
//     {id:2, nombre:"mario"}
// ]

// const Array2 = [
//     {apellido:"velasquez"},
//     {apellido:"vasquez"},
// ]

// console.log(Array)
// console.log(Array2)
// let New = [...Array, ...Array2]
// console.log(New)

// const ArrayNew = Array.map((item, index) =>{
//     console.log(item)
//     const staticItem = Array2[index] || {};
//     console.log(staticItem)
//     return{
//         ...item,
//         ...staticItem
//     }
// })

// console.log(ArrayNew)

