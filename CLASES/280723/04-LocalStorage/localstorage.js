'use strict'
// Localstorage
// Memoria del navegador


// Comprobación de la disponibilidad del LocalStorage
if(typeof(Storage) !== 'undefined'){
    console.log("disponible");
}else{
    console.log("No disponible");
}

// Guardar datos

localStorage.setItem("listado", "Listado de Alumnos inscritos");

// Recuperar datos
localStorage.getItem("listado");

// document.querySelector(".listado").innerHTML = localStorage.getItem("listado");

// Guardar objetos JSON
var alumno = {
    nombre: 'Juan López',
    correo: 'juanlopez@gmail.com',
    telefono: '555 555 555'
};
localStorage.setItem("alumno", JSON.stringify(alumno));
// Para guardar tenemos que convertir el objecto en un string

// Recuperar objetos JSON del locaStorage
var alumnojs = JSON.parse(localStorage.getItem("alumno"));
// Para recuperar tenemos que revertir el string y convertirlo en objeto
document.querySelector("#totalalumnos").append(alumnojs.nombre + "-----------"+alumnojs.correo+"-----------"+alumnojs.telefono);

// Borrar Datos
localStorage.removeItem("alumno");

//  Vaciar LocalStorage
localStorage.clear();