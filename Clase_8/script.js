/* getElementByTagName() → selecciona etiquetas*/

// let etiqueta =document.getElementsByTagName("h1")[0]
// let etiqueta2 =document.getElementsByTagName("h1")[1]

// etiqueta.style.color = "red";
// etiqueta2.style.color = "red";

/*getElementById() → selecciona una etiqueta usando el ID*/

// let seleccioname = document.getElementById('seleccioname');
// seleccioname.style.background = "blue";
// seleccioname.style.fontSize = "25px";

/* getElementsByClassName()*/

// let seleccion_class = document.getElementsByClassName("dom")[0];
// seleccion_class.style.color = "orange";

/*querySelector() */

// let dom = document.querySelector(".javascript");
// dom.style.background = "pink";

/*querySelectorAll() */

// let queryAll = document.querySelectorAll(".all");

// queryAll.forEach(elemento =>{
//     elemento.style.color = "blue";
// })

// console.log(queryAll)


/*Propiedad innerHTML */

// let texto_cambiar = document.querySelector('.cambiar');

// texto_cambiar.innerHTML = "Sere el mejor programando";

/*Propiedad atribute */

// function mybutton(){
//     let seleccionar = document.getElementById("seleccionar");
//     seleccionar.src = "perro.jpg";
//     seleccionar.setAttribute("class","animal");
// }

/*CREANCION DE ELEMENTOS CON → creatElement() */

// let contenedordiv = document.querySelector(".contenedor");


// let elemento = document.createElement("p");
// elemento.innerHTML = "creando mi primera etiqueta";
// contenedordiv.appendChild(elemento);

// function Evento(){
//     let contenedordiv = document.querySelector(".contenedor");
//     let parrafo_p = document.getElementById("parrafo");
//     contenedordiv.removeChild(parrafo_p);
// }

/*ESCUCHADOR DE EVENTOS → addEventListener() */

// let botonClass = document.querySelector(".botonClass");
// botonClass.addEventListener('click', function(){
//     let contenedordiv = document.querySelector(".contenedor");
//     let parrafo_p = document.getElementById("parrafo");
//     contenedordiv.removeChild(parrafo_p);
// })

/*APRENDIENDO A USAR classList */

// let plataforma_online = document.getElementById("plataforma");

// plataforma_online.classList.add("fondo");

/*Quitar una clase o selector */

// let plataforma_online = document.getElementById("plataforma");
// plataforma_online.classList.remove("all")

