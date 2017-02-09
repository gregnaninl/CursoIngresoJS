function Mostrar()
{
//tomo la edad  
var edad;

	edad=document.getElementById('edad').value;
	if(edad>=18)
		{
		alert( "Es mayor de edad!!!!");
		}
	else
		{
	if(edad<18 && edad>=13)
		{
		alert("Es adolecente!!")
		}
	if(edad<13)
		{
		alert("Es un NIÑO")
		}



	}



}//FIN DE LA FUNCIÓN