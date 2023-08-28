$(document).ready(function(){
	var caja = $("#caja");

	$("#mostrar").hide();
	
	$("#mostrar").click(function(){
		$(this).hide();
		$("#ocultar").show();

		caja.slideDown('slow');
	});

	$("#ocultar").click(function(){
		$(this).hide();
		$("#mostrar").show();

		caja.slideUp('slow', function(){
			console.log("Cartel ocultado");
		});
		
	});

	$("#todoenuno").click(function(){
		caja.slideToggle('fast');
	});

	$("#animar").click(function(){
		caja.animate({
					  marginLeft: '500px',
					  fontSize: '40px',
					  height: '110px'
					 }, 'slow')
			.animate({
				borderRadius: '900px',
				marginTop: '80px'
			}, 'slow')
			.animate({
				borderRadius: '0px',
				marginLeft: '0px'
			}, 'slow')
			.animate({
				borderRadius: '100px',
				marginTop: '0px'
			}, 'slow')
			.animate({
					  marginLeft: '500px',
					  fontSize: '40px',
					  height: '110px'
					 }, 'slow')
		;
	});

});