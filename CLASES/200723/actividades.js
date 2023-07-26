//Actividad2

// var a = 10;
// var b = 5;

// var a = Number(prompt("Introduce el primer número"));
// console.log("El primer número es " + a);
// var b = Number(prompt("Introduce el segundo número"));
// console.log("El segundo número es " + b);

// document.write("Sumar: " + (a+b) + "<br/>");
// document.write("Restar: " + (a-b) + "<br/>");
// document.write("Multiplicar: " + (a*b) + "<br/>");
// document.write("Dividir: " + (a/b) + "<br/>");


//Actividad3

// var a = parseInt(prompt("Introduce el primer número"));
// console.log("El primer número es " + a);
// var b = parseInt(prompt("Introduce el segundo número"));
// console.log("El segundo número es " + b);
// if (a==b) {
//     console.log("El número " + a + " y " + "el número " + b + " son iguales");
// }else if (a>b){
//     console.log("El primero es mayor.")
// } else if (b>a){
//     console.log("El segundo es mayor")
// }else{
//     console.log("Algo pasa!!!");
// }

//Actividad4

// var niños = parseInt(prompt ("Introduce el número de niños"));
// console.log ("El número de niños es " + niños);
// var niñas = parseInt(prompt ("Introduce el número de niñas"));
// console.log ("El número de niñas es " + niñas);

// function porcentajeniños (num1,num2) {
//     return num1 * 100 / (num1 + num2);
// }
// console.log ("El porcentaje de niños es del " + porcentajeniños(niños,niñas));

// function porcentajeniñas (num1,num2) {
//     return num2 * 100 / (num1 + num2);
// }
// console.log ("El porcentaje de niñas es del " + porcentajeniñas(niños,niñas));


//Actividad5

// var precio = parseInt(prompt("Escribe el importe de la compra"));
// var mes = prompt("Introduce el mes");

// if (mes == "octubre"){
//     total = precio*0.85;
// }else{
//     total = precio;
// }
// console.log(total);

//Actividad6

// for(var i=0;i<3; i++){
//     var contraseña = prompt("Introduce la contraseña");

//     if(contraseña=="123456"){
//         document.write("Es correcto");
//         break;
//     }else {
//         alert("Vuelve a intentarlo");
//     }
// }

//Actividad9

// var numero = parseInt(prompt(`¿De que número quieres la tabla`, 1));
// document.write("<h1>Tabla del "+numero+"</h1>");
// for(var i = 1; i <=10; i++){
// document.write(i+" x "+numero+" = "+(i*numero)+"<br/>");
// }

//Todas las tablas

// for(var c = 1; c<= 10; c++){
//     document.write("<h1>Tabla del "+c+"</h1>");
//     for(var i = 1; i <=10; i++){
//         document.write(i+" x "+c+" = "+(i*c)+"<br/>");
//         }
// }
// n = 1;

// Tablas según petición

// do{
//     for(var c = 1; c<= numero; c++){
//         document.write("<h1>Tabla del "+c+"</h1>");
//         for(var i = 1; i <=10; i++){
//             document.write(i+" x "+c+" = "+(i*c)+"<br/>");
//             }
//     }
//     n++;
// }while(n==numero);

//Actividad10

// var precio = parseInt(prompt("Escribe el importe de la compra"));
// var mes = prompt("Introduce el mes");
// var pfinal= 0;
// document.write("El precio es  "+precio + " €"+"<br/>");
// document.write("El mes es "+mes +"<br/>");

// mes = (mes.toLowerCase());
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

//Actividad11

    // var administrador = prompt ("usuario" , []);
    
    // if (administrador == "Admin" || administrador =="admin" || administrador== "ADMIN")
    // {
    
    // var contraseña = prompt ("contraseña:", []);
    // if (contraseña == "webmaster"){
    // alert ("Bienvenido");}
    // else if (contraseña==="" || contraseña===null){
    // alert ("cancelado");
    // }
    // else {
    //     alert ("contraseña incorrecta");
    // }

    // }else if (administrador === "" || administrador === null){
    // alert ("cancelado");
    // }else {
    // alert ("usuario incorrecto");
    // }