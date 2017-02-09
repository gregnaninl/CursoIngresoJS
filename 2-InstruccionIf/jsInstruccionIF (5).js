function Mostrar()
{
//tomo la edad  

var edad;

	edad=document.getElementById('edad').value;
	

	if(!(edad<18 && edad>12)) 
	{
	alert( "Es adolescente!!!!");
	}

// esta es una opción)
	/*if(edad<18 && edad>12) 
		{
	    	   
		}
		else
		{
			 alert( "Es adolescente!!!!");
		}
		*/


}//FIN DE LA FUNCIÓN