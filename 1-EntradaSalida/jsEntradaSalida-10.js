/*Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function MostrarAumento()
{
	
    var ingreseImporte;
	var resultado;
  
  
	ingreseImporte= document.getElementById('importe').value;
	ingreseImporte=parseInt(ingreseImporte);
	resultado=ingreseImporte*0.75;
	document.getElementById('resultado').value=resultado;

   	

}
