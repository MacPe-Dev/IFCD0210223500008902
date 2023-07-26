// DECLARAMOS LAS VARIABLES
var i,j;
// PEDIMOS POR TECLADO EL NÚMERO DE FILAS
// Number fuerza a que se introduzca un número
var filas = Number(prompt("Introduce numero de filas"));
// PEDIMOS EL NÚMERO DE COLUMNAS
var colum = Number(prompt("Introduce numero de columnas"));
// MULTIPLICAMOS filas * columnas Y GUARDAMOS EL RESULTADO EN res
var res = filas * colum;
// COMENZAMOS A IMPRIMIR LA TABLA
document.write("<table border>");
// BUCLE DESDE 0 HASTA EL NÚMERO DE FILAS
for (i = 0; i < filas; i++) {
    // EN CADA FILA ESCRIBIMOS UN <tr> PARA COMENZAR LA FILA
    document.write("<tr>");
    // BUCLE DESDE 0 HASTA EL NÚMERO DE COLUMNAS
    for (j = 0; j < colum; j++) {
        // EN CADA UNA ESCRIBIMOS UN <td> PARA COMENZAR UNA CELDA
        document.write("<td>");
        // LUEGO ESCRIBIMOS EL VALOR DE res
        document.write(res);
        // LE RESTAMOS 1 A res
        res--;
        // Y ESCRIBIMOS UN </td> PARA CERRAR LA CELDA
        document.write("</td>");
    }
    // ESCRIBIMOS UN </tr> PORQUE SE TERMINÓ LA FILA
    document.write("</tr>");
}
// Y POR ÚLTIMO CERRAMOS LA TABLA CON </table>
document.write("</table>");