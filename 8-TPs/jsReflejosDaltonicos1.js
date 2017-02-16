/*En la pantalla se mostrarán 6 botones de 
distintos colores,  al comenzar el juego se 
mostrara el texto de un color entre los 6 posibles
 para que el jugador sepa que botón tocar .Al tocar 
 el botón correcto se informara cuanto tiempo tardo.
*/
var ColorSecreto;
var tiempoInicio;
function comenzar()
{


	tiempoInicio=  new Date();
 	tiempoInicio=tiempoInicio.getTime();

ColorSecreto=Math.floor((Math.random()*6)+1);
//document.getElementById('ColorElejido').value=ColorSecreto;

switch(ColorSecreto)
{
	case 1:
	document.getElementById('ColorElejido').value="Azul";
	break;
	case 2:
	document.getElementById('ColorElejido').value="Marrón";
	break;
	case 3:
	document.getElementById('ColorElejido').value="Celeste";
	break;
	case 4:
	document.getElementById('ColorElejido').value="Amarrillo";
	break;
	case 5:
	document.getElementById('ColorElejido').value="Verde";
	break;
	case 6:
	document.getElementById('ColorElejido').value="Rojo";
	break;
}


}//FIN DE LA FUNCIÓN
function Responder(colorParametro)
{

var colorParametro;
var tiempoFinal;
var resultado;
var color;



//alert(ColorSecreto);
switch(colorParametro)
{

	case "azul":
	color=1;
	break;
	case "marron":
	color=2;
	break;
	case "celeste":
	color=3;
	break;
	case "amarillo":
	color=4;
	break;
	case "verde":
	color=5;
	break;
	case "rojo":
	color=6;
	break;

}
color=parseInt(color);
if(ColorSecreto==color)
{
	tiempoFinal= new Date();
	tiempoFinal=tiempoFinal.getTime();
	resultado=tiempoFinal-tiempoInicio;
	alert("correcto es "+colorParametro +" su tiempo fue: "+resultado);
    
}


//alert(colorParametro);
	
	
}//FIN DE LA FUNCIÓN
