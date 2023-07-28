
// BOM - Browser Objet Model

// console.log(window.innerWidth);
// console.log(window.innerHeight);

// console.log(screen.width);
// console.log(screen.height);

// console.log(window.location);
// function redirect(url){
//     window.location.href = url;
// }

// function ventananueva(url){
//     window.open(url);
//     window.open(url, "", "width=400,height=300");
//  window.location.reload

// }

// EVENTOS

//  Un evento es una función que se ejecuta cuando sucede alago
window.addEventListener('load', () =>{
// load
// Poner todo lo relacionado con el DOM   
// Ratón con evento HTML

var boton = document.querySelector('#boton1');

function cambiarColor(){
    if (boton.style.background == "green"){
        boton.style.background = "red";
        
    }else{
        boton.style.background = "green";
    }
    boton.style.padding = "10px"
    boton.style.border = "1px solid #000"
    return true;
}

var boton = document.querySelector('#boton2');
boton.addEventListener('click', function(){
    cambiarColor();
    this.style.border = "10px solid black"
})

//  Focus
var input = document.querySelector('#nombre');
input.addEventListener('focus', function(){
    console.log("Estas dentro del input");
})
//  Blur
var input = document.querySelector('#nombre');
input.addEventListener('blur', function(){
    console.log("Estas fuera del input");
})
// Keydown
var input = document.querySelector('#nombre');
input.addEventListener('keydown', function(event){
    console.log("Has pulsado la tecla "+ String.fromCharCode(event.keyCode));
})

// Keypress
var input = document.querySelector('#nombre');
input.addEventListener('keypress', function(event){
    console.log("Has presionado la tecla: "+ String.fromCharCode(event.keyCode));
})


window.location.reload



    

});


