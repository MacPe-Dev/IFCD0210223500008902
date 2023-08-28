$(document).ready(function(){

// Selectores

$('#rojo').css('color', 'red')
          .css('font-size','1.5em');
$('#verde').css('color', 'green')
          .css('font-size','1.5em');
$('#azul').css('color', 'blue')
          .css('font-size','1.5em');

var laclase = $('.recuadro');
console.log(laclase);

console.log(laclase[0]);
console.log(laclase.eq(1));

$(laclase[0]).css('background-color', 'red')
             .css('color', 'white');
$(laclase[1]).css('background-color', 'green')
             .css('color', 'white');
$(laclase[2]).css('background-color', 'blue')
             .css('color', 'white');

$('h1').addClass('recuadro');

$('h1').removeClass('recuadro');

$('[title="rojo"]').css('font-size', '2.5em');

var busqueda = $('#contenedor').find('.resaltado');
console.log(busqueda);

var otrabusqueda = $('#contenedor').find('.resaltado');
console.log(otrabusqueda);
});