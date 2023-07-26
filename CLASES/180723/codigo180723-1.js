
// Funciones
// Una función es una agrupación reutilizable de un conjunto de instrucciones
// function calcular(){
//     document.write("Sumar: " + (10+12) + "<br/>");
//     document.write("Restar: " + (10-12) + "<br/>");
//     document.write("Multiplicar: " + (10*12) + "<br/>");
//     document.write("Dividir: " + (10/12) + "<br/>");
// }
// calcular();

// Parametros
// function calcular(nro1, nro2){
//     document.write("Sumar: " + (nro1+nro2) + "<br/>");
//     document.write("Restar: " + (nro1-nro2) + "<br/>");
//     document.write("Multiplicar: " + (nro1*nro2) + "<br/>");
//     document.write("Dividir: " + (nro1/nro2) + "<br/>");
// }
// calcular(20, 5);

// function calcular(num1, num2){
//     document.write("Sumar: " + (num1+num2) + "<br/>");
//     document.write("Restar: " + (num1-num2) + "<br/>");
//     document.write("Multiplicar: " + (num1*num2) + "<br/>");
//     document.write("Dividir: " + (num1/num2) + "<br/>");
// }
// for(var n = 1; n<=10; n++){
//     document.write(n + "<br/>");
//     calcular(n, 5);
// }

//Parametros opcionales
// function calcular(num1, num2, ver = false){
//     if(ver == false){
//     document.write("Sumar: " + (num1+num2) + "<br/>");
//     document.write("Restar: " + (num1-num2) + "<br/>");
//     document.write("Multiplicar: " + (num1*num2) + "<br/>");
//     document.write("Dividir: " + (num1/num2) + "<br/>");
//     } else {
//         document.write("No puedo mostrar nada!!!" + "<br/>");
//     }

// }
// calcular(20, 5, true);
// calcular(20, 4, false);

// var a = prompt("Introduce el primer número");
// console.log("El primer número es " + a);
// var b = prompt("Introduce el segundo número");
// console.log("El segundo número es " + b);
// if (a==b) {
//     console.log("El número " + a + " y " + "el número " + b + " son iguales");
// }else if (a>b){
//     console.log("El primero es mayor.")
// } else if (b>a){
//     console.log("El segundo es mayor")
// }


// var niños = parseInt(prompt ("Introduce el número de niños"));
// console.log ("El número de niños es " + niños);
// var niñas = Number(prompt ("Introduce el número de niñas"));
// console.log ("El número de niñas es " + niñas);

// function porcentajeniños (num1,num2) {
//     return num1 * 100 / (num1 + num2);
// }
// console.log ("El porcentaje de niños es del " + porcentajeniños(niños,niñas));

// function porcentajeniñas (num1,num2) {
//     return num2 * 100 / (num1 + num2);
// }
// console.log ("El porcentaje de niñas es del " + porcentajeniñas(niños,niñas));

// var numero = parseInt(prompt(`¿De que número quieres la tabla`, 1));
// document.write("<h1>Tabla del "+numero+"</h1>");
// for(var i = 1; i <=10; i++){
// document.write(i+" x "+numero+" = "+(i*numero)+"<br/>");
// }

// //Todas las tablas
// for(var c = 1; c<= 10; c++){
//     document.write("<h1>Tabla del "+c+"</h1>");
//     for(var i = 1; i <=10; i++){
//         document.write(i+" x "+c+" = "+(i*c)+"<br/>");
//         }
// }
// n = 1;
// do{
//     for(var c = 1; c<= numero; c++){
//         document.write("<h1>Tabla del "+c+"</h1>");
//         for(var i = 1; i <=10; i++){
//             document.write(i+" x "+c+" = "+(i*c)+"<br/>");
//             }
//     }
//     n++;
// }while(n==numero);

// var precio = parseInt(prompt("Escribe el importe de la compra"));
// var mes = prompt("Introduce el mes");
// var pfinal= 0;
// document.write("El precio es  "+precio + " €"+"<br/>");
// document.write("El mes es "+mes +"<br/>");

// mes = (mes.toLowerCase());

// switch(mes) {
//     case "enero" || "febrero":
//         pfinal = precio*0.80;
//         document.write("El precio final es "+pfinal +"<br/>");
//         break;
//     case "julio" && "agosto" && "octubre"://quita octubre la actividad ponia solo julio y agosto
//         pfinal = precio*0.85;
//         document.write("El precio final es "+pfinal +"<br/>");
//         break;
//     case "noviembre" && "diciembre":
//         pfinal = precio*0.75;
//         document.write("El precio final es "+pfinal +"<br/>");
//         break;
//     default:
//         pfinal = precio;
//         document.write("El precio final es "+pfinal +"<br/>");
//         break;
// }

// switch(mes) {
//     case "enero": case "febrero":
//         pfinal = precio*0.80;
//         document.write("El precio final es "+pfinal +"<br/>");
//         break;
//     case "julio": case "agosto":
//         pfinal = precio*0.85;
//         document.write("El precio final es "+pfinal +"<br/>");
//         break;
//     case "noviembre": case "diciembre":
//         pfinal = precio*0.75;
//         document.write("El precio final es "+pfinal +"<br/>");
//         break;
//     default:
//         pfinal = precio;
//         document.write("El precio final es "+pfinal +"<br/>");
//         break;
// }

    

// var i = 0;
// var x = 10;
//    while (i < 6) {
//       if (i == 4)
//          break;
//       i++;
//    }
//    console.log(i * x);