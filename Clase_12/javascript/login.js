// AUTENTICACION DE USUARIOS O LOGIN


let formulario = document.getElementById("formulario");

formulario.addEventListener('submit',(e)=>{
    e.preventDefault();

    let gmail = document.getElementById("gmail").value;
    let password = document.getElementById("password").value;

    let usuarios = JSON.parse(localStorage.getItem("usuarios")) || []

    let isvalor = false

    usuarios.forEach(user => {
        
        if(user.gmail == gmail && user.password == password){
            isvalor = true
            alert("Logeo Exitoso")
            location.href = "dashboard.html"
        }
    });

    if(!isvalor){
        alert("credenciales incorrectos")
    }



    formulario.reset();
})


