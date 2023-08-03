window.addEventListener('load', () =>{

var formulario = document.querySelector("#formulario");
var box_info = document.querySelector(".info");
box_info.style.display = "none";

formulario.addEventListener('submit', function(){

    var nombre = document.querySelector("#nombre").value;
    var apellido = document.querySelector("#apellidos").value;
    var edad = parseInt(document.querySelector("#edad").value);

    if(nombre.trim() == null || nombre.trim() == ""){
        document.querySelector("#error_nombre").innerHTML = "Nombre no válido";
        document.querySelector("#error_nombre").style.color = "red";
        return false
    }else{
        document.querySelector("#error_nombre").innerHTML = "Nombre válido";
        document.querySelector("#error_nombre").style.color = "green";
    }

    if(apellido.trim() == null || apellido.trim() == ""){
        document.querySelector("#error_apellidos").innerHTML = "Apellidos no válidos";
        document.querySelector("#error_apellidos").style.color = "red";
        return false
    }else{
        document.querySelector("#error_apellidos").innerHTML = "Apellidos válidos";
        document.querySelector("#error_apellidos").style.color = "green";
    }

    if(edad == null || edad <= 0 || isNaN(edad)){
        document.querySelector("#error_edad").innerHTML = "Edad no válida";
        document.querySelector("#error_edad").style.color = "red";
        return false
    }else{
        document.querySelector("#error_edad").innerHTML = "Edad válida";
        document.querySelector("#error_edad").style.color = "green";
    }

    box_info.style.display = "block";

    var i_nombre = document.querySelector("#i_nombre span");
    var i_apellidos = document.querySelector("#i_apellidos span");
    var i_edad = document.querySelector("#i_edad span");

    i_nombre.innerHTML = nombre;
    i_apellidos.innerHTML = apellido;
    i_edad.innerHTML = edad;

})

});
