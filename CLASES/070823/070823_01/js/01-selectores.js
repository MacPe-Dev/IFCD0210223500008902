$(document).ready(function(){

	// Selector de ID
	$("#rojo").css("background","red")
			  .css("color", "white");

	$("#amarillo").css("background","yellow")
				  .css("color","green");

	$("#verde").css("background","green")
				  .css("color","white");


	// Selectores de clases
	var mi_clase = $('.zebra').css("padding","5px");

	$('.sin_borde').click(function(){
		console.log("Click dado!!");
		$(this).addClass('zebra');
	});


	// Selectores de etiqueta
	var parrafos = $('p').css("cursor", "pointer");

	parrafos.click(function(){
		var that = $(this);

		if(!that.hasClass('grande')){
			that.addClass('grande');
		}else{
			that.removeClass('grande');
		}
	});

	// Selectores de atributo
	$('[title="Google"]').css('background', '#ccc');
	$('[title="Facebook"]').css('background', 'blue');

	// Otros
	//$('p, a').addClass('margen-superior');

	var busqueda = $("#elemento2").parent().parent().find('.resaltado');

	console.log(busqueda);

});