// JSON - JavaScript Object Notation
// Nos permite crear objetos de forma rápida

var alumno = {
    nombre: 'Juan López',
    correo: 'juanlopez@gmail.com',
    telefono: '555 555 555'
};
var alumnouno = {
    nombre: 'Juan López',
    correo: 'juanlopez@gmail.com',
    telefono: '555 555 555'
};

// Realizar cambios en el objeto
alumno.nombre = "Juan Lopez García";

// Agrupar objetos en un Array
var alumnos = [alumno, alumnouno];
console.log(alumnos);

// Mostrar Objetos
var total_alumnos = document.querySelector("#totalalumnos");

var indice;
for(indice in alumnos){
    var p = document.createElement("p");
    p.append(alumnos[indice].nombre + "-----");
    p.append(alumnos[indice].correo + "-----");
    p.append(alumnos[indice].telefono);
    total_alumnos.append(p);
}
