var a = prompt("Introduce el valor de A ", "0");
console.log("Valor de A "  + a);
var b = prompt("Introduce el valor de B", "0");
console.log("Valor de B " + b);
c = a;
a = b;
b = c;
console.log("Ahora el valor de A " + a);
console.log("Ahora el valor de B " + b);