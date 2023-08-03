function guardarAlmacenamientoLocal(llave, valor_a_guardar) {
    localStorage.setItem(llave, JSON.stringify(valor_a_guardar))
}
function obtenerAlmacenamientoLocal(llave) {
    const datos = JSON.parse(localStorage.getItem(llave))
    return datos

}

let alumnos = obtenerAlmacenamientoLocal('alumnos') || [];
let mensaje = document.getElementById('mensaje')

//Añadir un alumno
const añadirAlumno = document.getElementById('alumnoAñadir')
const añadirApellido = document.getElementById('apellidoAñadir')
const añadirEmail = document.getElementById('emailAñadir')
const añadirImagen = document.getElementById('ImagenAñadir')

document.getElementById("botonAñadir").addEventListener("click", function (event) {
    event.preventDefault()
    let alumnoAñadir = añadirAlumno.value
    let apellidoAñadir = añadirApellido.value
    let emailAñadir = añadirEmail.value
    let imagenAñadir = añadirImagen.value

    let van = true

    if (alumnoAñadir == '' || apellidoAñadir == '' || emailAñadir == '' || imagenAñadir == '') {
        mensaje.classList.add('llenarCampos')
        setTimeout(() => { mensaje.classList.remove('llenarCampos') }, 5000)
        van = false
    }
    else {
        for (let i = 0; i < alumnos.length; i++) {
            if (alumnos[i].nombre == alumnoAñadir) {
                mensaje.classList.add('repetidoError')
                setTimeout(() => { mensaje.classList.remove('repetidoError') }, 2500)
                van = false
            }
        }
    }

    if (van == true) {
        alumnos.push({
            nombre: alumnoAñadir,
            apellido: apellidoAñadir,
            email: emailAñadir,
            urlImagen: imagenAñadir
        })
        mensaje.classList.add('realizado')
        setTimeout(() => {
            mensaje.classList.remove('repetidoError')
            window.location.reload()
        }, 1500)
    }
    guardarAlmacenamientoLocal('alumnos', alumnos);

   
})

// Editar
const alumnoEd = document.getElementById('alumnoEditar')
const atributoEd = document.getElementById('atributoEditar')
const nuevoAtributoEd = document.getElementById('nuevoAtributo')

document.getElementById("botonEditar").addEventListener("click", function (event) {
    event.preventDefault()
    let alumnoEditar = alumnoEd.value
    let atributoEditar = atributoEd.value
    let nuevoAtributo = nuevoAtributoEd.value
    let van = false
    if (alumnoEditar == '' || atributoEditar == '' || nuevoAtributo == '') {
        mensaje.classList.add('llenarCampos')
        setTimeout(() => { mensaje.classList.remove('llenarCampos') }, 2500)
    }
    else {
        for (let i = 0; i < alumnos.length; i++) {
            if (alumnos[i].nombre == alumnoEditar) {
                alumnos[i][atributoEditar] = nuevoAtributo
                van = true
            }
        }
        if (van == true) {
            mensaje.classList.add('realizado')
            setTimeout(() => {
                mensaje.classList.remove('realizado')
                window.location.reload()
            }, 1500);
        }
        else {
            mensaje.classList.add('noExisteError')
            setTimeout(() => { mensaje.classList.remove('noExsiteError') }, 2500);
        }
        guardarAlmacenamientoLocal('alumnos', alumnos);
    }
})

// Eliminar
const alumnoE = document.getElementById('alumnoEliminar')

document.getElementById("botonEliminar").addEventListener("click", function (event) {
    event.preventDefault()
    let alumnoEliminar = alumnoE.value
    let van = false

    for (let i = 0; i < alumnos.length; i++) {
        if (alumnos[i].nombre == alumnoEliminar) {
            alumnos.splice(i, 1)
            van = true
        }
    }

    if (van == false) {
        mensaje.classList.add('noExsiteError')
        setTimeout(() => { mensaje.classList.remove('noExsiteError') }, 2500);
    }
    else {
        mensaje.classList.add('realizado')
        setTimeout(() => {
            mensaje.classList.remove('realizado')
            window.location.reload()
        }, 1500);
    }
    guardarAlmacenamientoLocal('alumnos', alumnos);
})

// mostrar alumnos
window.addEventListener("load", () => {
    const alumnoEd = document.getElementById('alumnoEditar')
    const alumnoEl = document.getElementById('alumnoEliminar')
    for (let i = 0; i < alumnos.length; i++) {
        alumnoEd.innerHTML += `<option>${alumnos[i].nombre}</option>`
        alumnoEl.innerHTML += `<option>${alumnos[i].nombre}</option>`
    }
    Object.keys(alumnos[0]).forEach(element => {
        atributoEd.innerHTML += `<option>${element}</option>`
    });

    let muestraalumnos = document.getElementById('mostrarAlumnos')
    muestraalumnos.innerHTML = ''
    for (let i = 0; i < alumnos.length; i++) {
        muestraalumnos.innerHTML += `<div class="contenedorAlumnos"><img src="${alumnos[i].urlImagen}"><div class="informacion"><p>${alumnos[i].nombre}</p><p class="apellido"><span>Apellido: ${alumnos[i].apellido}</span></p> email: ${alumnos[i].email}<p></p></div></div>`
    }
})

