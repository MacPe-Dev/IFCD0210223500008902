var a = prompt("Introduce el valor de A ", "0");
console.log("Valor de A "  + a);
var b = prompt("Introduce el valor de B", "0");
console.log("Valor de B " + b);
c = a;
a = b;
b = c;
console.log("Ahora el valor de A " + a);
console.log("Ahora el valor de B " + b);

var nomb = prompt("Introduce nombre de usuario: ", " ");
if (nomb==="Manuel"){
    alert("Bienvenido" + nomb)
} else (nomb != "Manuel")
    alert("Usuario no existe")

var pass = prompt("Introduce contraseña: ", " ");
if (pass==="2023"){
    alert("Bienvenido" + pass)
} else (pass != "2023")
    alert("La Contraseña no es corecta")