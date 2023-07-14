function cambiar(){
    document.getElementById('matrix').src="media/img1.webp";
  }
  function volver(){
    document.getElementById('matrix').src="media/img3.webp";
  }

function conversion(){

    
    
    var valor=document.getElementById("cantidad").value;
    var a=document.getElementById("a").value;
    let euro=0.91; let dolar=1.10; var resultado=0;
    
    if (a==1){
        resultado=valor*euro;
        md="Euros";
    }
    else if (a==2){
        resultado=valor*dolar;
        md="Dolares";
    }
    else {
        resultado=valor;
        md="No has seleccionado moneda";
    }
    document.getElementById("resultado").innerHTML="Resultado: "+resultado.toFixed(2)+"  "+md;
    document.getElementById("info").innerHTML="Información de cambio a: "+Date();

    
}
