//Actividad 1

// var a = parseInt(prompt("Primer número: "));
// var b = Number(prompt("Segundo número: "));
// console.log(a);
// console.log(b);

// console.log(a+b);
// document.write(a+b + "<br/>");
// document.write(a-b + "<br/>");
// document.write(a*b + "<br/>");
// document.write(a/b + "<br/>");

//Actividad 2
// var a = parseInt(prompt("Primer número: "));
// var b = parseInt(prompt("Segundo número: "));
// console.log("El primer número es: " + a);
// console.log("El segundo número es: " + b);
// if (a==b){
//     console.log("Son iguales");
// } else if(a>b){
//     console.log("El primero es mayor");
// } else {
//     console.log("El segundo es mayor");
// }

//Actividad 3
// var ninos = parseInt(prompt("Número de niños: "));
// var ninas = parseInt(prompt("Número de niñas: "));
// console.log("Niños: " + ninos);
// console.log("Niñas: " + ninas);

// var totalninos = ninos+ninas;
// var porcentninos = (ninos*100)/totalninos;
// var porcentninas = (ninas*100)/totalninos;

// console.log("El porcentaje de niñas " + porcentninas);
// console.log("El porcentaje de niños " + porcentninos);


// function calcular(nro1, nro2){
//     document.write("Sumar: " + (nro1+nro2) + "<br/>");
//     document.write("Restar: " + (nro1-nro2) + "<br/>");
//     document.write("Multiplicación: " + (nro1*nro2) + "<br/>");
//     document.write("División: " + (nro1/nro2) + "<br/>");
//     document.write("<hr>")
// }
// for (var n= 1; n<=5; n++){
//     document.write(n + "<br/>");
//     calcular(n, 5);
// }

//toUpperCase() toLowerCase()
11 
//Parámetros opcionales  
//mes=="octubre" || mes=="Octubre" || mes=="OCTUBRE"
// function calcular(nro1, nro2, ver = false){
//     if(ver == false){
//     document.write("Sumar: " + (nro1+nro2) + "<br/>");
//     document.write("Restar: " + (nro1-nro2) + "<br/>");
//     document.write("Multiplicación: " + (nro1*nro2) + "<br/>");
//     document.write("División: " + (nro1/nro2) + "<br/>");
//     document.write("<hr>")
//     } else {
//         document.write("No tengo nada que mostrar!!!")
//     }
// }
// calcular(20, 5, false);

// var edad = 18;
// var dato = "";
// switch (edad) {
//   case 18:
//     	dato = "Es mayor de edad";
//     break;
//   case 33:
//  		dato = "Es joven";
//     break;
//   case 70:
//  		dato = "Es mayor";
//     break;
//   default:
//  		dato = "¿Cómo estás?";
//     break;
// }
// console.log(dato);

var edad=74;
var nombre="Juan López";
if(edad >= 18 && edad <= 32){
	console.log(nombre+" tiene "+edad+" años, es mayor de edad");
}else if(edad >= 33){
	console.log(nombre+" tiene "+edad+" años, todavía es joven");
}else if(edad >= 70){
	console.log(nombre+" tiene "+edad+" años, está jubilado");
}else {
	console.log(nombre+" ¿Cómo te encuentras?"); 
}
// else{
// 	console.log(nombre+" tiene "+edad+" años, es menor de edad");
// }
