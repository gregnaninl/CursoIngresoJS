/*Debemos mostrar dos números Random  del 1 al 10 
y una de las cuatro operaciones básicas (suma, resta,
 división o multiplicación) para realizar entre estos
 dos números, estas operaciones también serán Random.
 En el cuadro de texto resultado el jugador debe ingresar
 el resultado de la operación y presionar el botón Aceptar.
se debe informar si el resultado es el correcto o no.
*/
var respuesta;
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

	operador=Math.floor((Math.random()*4)+1)
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
