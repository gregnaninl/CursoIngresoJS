/*Además de lo anterior, ahora 
se agregara un temporizador que
 a los cinco segundos dará por terminado 
 el juego  de no ser ingresado el resultado 
 correcto en ese lapso de tiempo. */
//var respuesta;
var temporizador;
function comenzar()
{
	
	var primerNumero;
	var operador;
	var segundoNumero;

	primerNumero=Math.floor((Math.random()*10)+1);
	primerNumero=parseInt(primerNumero);
	document.getElementById('PrimerNumero').value=primerNumero;

	segundoNumero=Math.floor((Math.random()*10)+1);
	segundoNumero=parseInt(segundoNumero);
	document.getElementById('SegundoNumero').value=segundoNumero;

	operador=Math.floor((Math.random()*4)+1);
	switch(operador)
	{
	case 1:
	document.getElementById('Operador').value="suma";
	break;
	case 2:
	document.getElementById('Operador').value="resta";
	break;
	case 3:
	document.getElementById('Operador').value="multiplicación";
	break;	
	case 4:
	document.getElementById('Operador').value="división";
	break;
	}

	temporizador = setTimeout(Responder, 4000);

	

}//FIN DE LA FUNCIÓN
function Responder()
{
	var resultado;
	var respuesta;
	respuesta=document.getElementById('Respuesta').value;
	respuesta=parseInt(respuesta);
	primerNumero=document.getElementById('PrimerNumero').value;
	primerNumero=parseInt(primerNumero);
	segundoNumero=document.getElementById('SegundoNumero').value;
	segundoNumero=parseInt(segundoNumero);
	operador=document.getElementById('Operador').value;
    
    //alert("se te pasarons los 4 segunsos")
	
	switch(operador)
	{
	case "suma":
	resultado= primerNumero+segundoNumero;
	break;
	case "resta":
	resultado=primerNumero-segundoNumero;
	break;
	case "multiplicación":
	resultado=primerNumero*segundoNumero;
	break;
	case "división":
	resultado=primerNumero / segundoNumero;
	break
	}

	//alert(resultado);
	if(respuesta==resultado)
	{
		alert("Acertaste!!!!");
	}
	else
	{
		alert("Incorrecto!!!")
		alert("La Respuesta correcta es "+resultado);
	}

	
}//FIN DE LA FUNCIÓN
