/*Al comenzar el juego generaremos un número 
RANDOM del 1 al 3 para la selección de la máquina, 
siendo 1 para “piedra”, el 2 para “papel” y 3 para “tijera”.
El jugador seleccionará una imagen correspondiente 
a su opción  y le informaremos si ganó, empató o perdió.
*/
var eleccionMaquina;

function comenzar()
{
	eleccionMaquina=Math.floor((Math.random()*3)+ 1);
	console.log(eleccionMaquina);
	

}//FIN DE LA FUNCIÓN
function piedra()
{
	var piedra;
	piedra=1;
	//alert(piedra);

switch (eleccionMaquina)
{
	case 1:
	alert("empató");
	break;
	case 2:
	alert("Usted perdió");
	break;
	case 3:
	alert("Usted ganó");
	break;
}



}//FIN DE LA FUNCIÓN
function papel()
{
	var papel;
	papel=2;
	//alert(papel);

	switch (eleccionMaquina)
{
	case 1:
	alert("Usted ganó");
	break;
	case 2:
	alert("empató");
	break;
	case 3:
	alert("Usted perdió");
	break;
}


}//FIN DE LA FUNCIÓN
function tijera()
{
	var tijera;
	tijera=3;
	//alert(tijera);
	
	switch (eleccionMaquina)
{
	case 1:
	alert("Usted perdió");
	break;
	case 2:
	alert("Usted ganó");
	break;
	case 3:
	alert("empató");
	break;
}


}//FIN DE LA FUNCIÓN