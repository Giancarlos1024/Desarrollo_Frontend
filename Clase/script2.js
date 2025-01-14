
/*CREANDO NUEVOS USUARIOS CON LOCALSTORAGE */

let formularioDatos = document.getElementById("formulariocreacionuser");
formularioDatos.addEventListener('submit', (e) => {
    e.preventDefault();

    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    // Recuperar datos existentes o inicializar un arreglo vacío
    let usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];
    // Agregar el nuevo usuario al arreglo
    usuarios.push({ username, password });
    // Guardar el arreglo actualizado en el localStorage
    localStorage.setItem('usuarios', JSON.stringify(usuarios));
    formularioDatos.reset();
    console.log('Usuarios almacenados:', usuarios);
});

let userAll = document.getElementById("mostrarUser")
const mostrarUser = () => {
    const user = localStorage.getItem("usuarios")
    console.log(user)

}



