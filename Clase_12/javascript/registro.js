// CREACION DE UN FORMULARIO PARA REGISTRAR USUARIOS


let formulario = document.getElementById("formulario");

formulario.addEventListener('submit',(e)=>{
    e.preventDefault();

    let id_user = document.getElementById("id").value;
    let gmail = document.getElementById("gmail").value;
    let password = document.getElementById("password").value;

    let usuarios = JSON.parse(localStorage.getItem("usuarios")) || []

    usuarios.push({id_user, gmail, password})

    localStorage.setItem("usuarios", JSON.stringify(usuarios))

    formulario.reset();
})