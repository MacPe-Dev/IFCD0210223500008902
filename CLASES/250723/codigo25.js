


// Añadir Usuario
var alumnos =[]
var mensaje = document.getElementById('mensaje')
const añadircodigo = document.getElementById('codigo')
const añadirnombre = document.getElementById('nombre')
const añadiredad = document.getElementById('edad')
const añadiremail = document.getElementById('email')
const añadirtelef = document.getElementById('telef')

document.getElementById("botonAñadir").addEventListener("click", function (event) {
    event.preventDefault()
    let codigo = añadircodigo.value
    let nombre = añadirnombre.value
    let edad = añadiredad.value
    let email = añadiremail.value
    let telef = añadirtelef.value

    let van = true

    // if (van == true) {
    //     alumnos.push({
    //         codigo: codigo,
    //         nombre: nombre,
    //         edad: edad,
    //         email: email,
    //         telefono: telef
    //     })
        // 
        // alert('realizado')
    // }
    // if (alumnos.length==3){
    //     for(i=0; i<alumnos.length; i++){
    // document.getElementById("listado").innerHTML = codigo[i] + nombre[i]+edad[i]+email[i]+telef[i]
    //  }
    // }else{
    //         alert("Faltan Alumnos")
    // }

alumnos.push(
    codigo,
    nombre,
    edad,
    email,
    telef
)

console.log(alumnos)
let alumno_uno =[];
let alumno_dos =[];
let alumno_tres =[];
alumno_uno=alumnos.slice(0,5)
alumno_dos=alumnos.slice(5,5)
alumno_tres=alumnos.slice(6,5)
console.log(alumno_tres)
let listado_alumnos=new Array(3)
listado_alumnos =new Array(alumno_uno,alumno_dos,alumno_tres)

document.getElementById("listar").addEventListener("click", function (event) {
event.preventDefault()

document.getElementById("listado").innerHTML = listado_alumnos[0]+ "</br>"+listado_alumnos[1]+ "</br>"+listado_alumnos[2]+ "</br>"
})
}
)
