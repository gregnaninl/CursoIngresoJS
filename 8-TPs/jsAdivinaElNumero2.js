/*En esta oportunidad el juego evaluará tus
 aptitudes a partir de la cantidad de intentos, 
 por lo cual se informará lo siguiente:
1° intento: “usted es un Psíquico”.
2° intento: “excelente percepción”.
3° intento: “Esto es suerte”.
4° intento: “Excelente técnica”.
5° intento: “usted está en la media”.
Desde  6 Intentos hasta 10:”falta técnica”
Más de 10 intentos: “afortunado en el amor!!”.*/

var numeroSecreto; 
var contadorIntentos;

function comenzar()
{
	//Genero el número RANDOM entre 1 y 100
	// numeroSecreto=Math.floor((Math.random()*100)+1);
	// alert(numeroSecreto);
	/* console.log(numeroSecreto);
	 contadorIntentos=0;
	 document.getElementById('intentos').value=contadorIntentos;*/
	numeroSecreto=Math.floor((Math.random()*100)+ 1);
	console.log(numeroSecreto);
	contadorIntentos=0;
	document.getElementById('intentos').value=contadorIntentos;



}

function verificar()
{

var ingresado;
	var verificar;

	ingresado=document.getElementById('numero').value;
	ingresado=parseInt(ingresado);
	contadorIntentos=contadorIntentos+1;
	document.getElementById('intentos').value=contadorIntentos;

	if(ingresado==numeroSecreto)
	{
		if(contadorIntentos>6)
		{
			alert("afotunado en el amor!!!");
		}
		else
		{	
		//alert("Usted es un ganador!!!");
		switch (contadorIntentos)
{
    case 1:
        alert("Usted es un Psíquico!!!");
        break;
    case 2:
        alert("excelente percepción!!!");
        break;
    case 3:
        alert("Esto es suerte!!");
        break;
    case 4:
        alert("Excelente técnica!!!");
        break;
        case 5:
        alert("usted está en la media!!!");
        break;
    
	
	}
	}
	}	
	else
		{
		if(ingresado>numeroSecreto)
		{
			alert("Te Pasaste!!!");
		}
		else
		{
			alert("Te falta un Poco!!!")
		}
		}




	
/*	var ingresado;
	ingresado=document.getElementById('numero').value;
	ingresado=parseInt(ingresado);
	contadorIntentos=contadorIntentos+1;
	contadorIntentos=parseInt(contadorIntentos);
	document.getElementById('intentos').value=contadorIntentos;
	if(ingresado==numeroSecreto)
	{
		alert("usted es un Psíquico");
		switch (contadorIntentos+2)
	{
	case 2:
		alert("excelente percepción");
		break;   
    case 3:
    	alert("Esto es Suerte");
    	break;
    case 4:
    	alert("Excelente técnica");       
   		break;
    case 5:
    	alert("Usted estae en la Media");  
    	break;              
	}
	}	
	if(ingresado>numeroSecreto)
	{
		alert("Te Pasaste");
	}
	else
	{
		alert("Te Falta Poco");
	}
}*/
}