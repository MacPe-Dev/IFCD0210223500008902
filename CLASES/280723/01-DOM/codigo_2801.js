// DOM - Document Object Model

var contenedor=document.getElementById("contenedor");

contenedor.innerHTML="Contenido del Contenedor";
contenedor.style.background ="blue";
contenedor.style.padding = "20px";
contenedor.style.color ="white";

contenedor.className ="contenedor";

function cambiarColor(color){
    contenedor.style.background = "green";
}

// var contenedor = document.querySelector("#contenedor");

// Conseguir elementos por su etiqueta

var elementos = document.getElementsByTagName('div');
console.log(elementos);
// nos devuelve un array con todos los elementos

// poner contenido en el elemento que necesite y cambiar los estilos
var contenido_tres = elementos[2];
contenido_tres.innerHTML = "Contenido añadido";
contenido_tres.style.background ="yellow";
contenido_tres.style.color = "black";

// Recorrer todos los divs
var valor;
for(valor in elementos){
    console.log(elementos[valor]);

    if(typeof elementos[valor].textContent == 'string'){

        var parrafo = document.createElement("p");
        var texto = document.createTextNode(elementos[valor].textContent);
        parrafo.append(texto);
        // crear etiqueta en documento html
        document.querySelector("#seccion_una").append(parrafo);
    
    }
}

// Seleccionar elementos por su clase

var divcaja = document.getElementsByClassName('caja');

var div;
for (div in divcaja){
    if(divcaja[div].className == "caja"){
        divcaja[div].style.color = "blue";
    }
}


// Query Selector
var solouno = document.querySelector("#solo_uno");
console.log(solouno);

var varios = document.querySelectorAll('div');
console.log(varios);

