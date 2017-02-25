/*El departamento de NUMEROS ESPECIALES  del instituto matemático  FonteCristo  nos está pidiendo una aplicación que verifique las distintas cualidades de los números.

13.	Para cada una de estas acciones  debemos realizar la lógica para verificar las cualidades pedidas:
a.	Se pedirán un número positivo y se mostrará la cantidad de números pares desde el número ingresado hasta el cero.
b.	Se pedirán un número positivo y se mostrará la cantidad de números pares desde el número ingresado hasta el cero.
c.	Se pedirán un número positivo y se mostrará la cantidad de números divisibles de este número que se encuentran desde el 1 al 100.
d.	Se pedirán un número positivo y se mostrará si el número es un número primo o no.
e.	Se pedirán un número positivo y se mostrará la cantidad de números Primos desde el número ingresado hasta el cero.
*/
function ComenzarIngreso () 
{
 		
 		var numero;
 		var numerosPares=numero;
 		var impar=numero;





 		numero=document.getElementById('numero').value;
 		numero=parseInt(numero);
 		NumerosPares=parseInt(NumerosPares);
 		impar=parseInt(impar);
 		while(numero<1)
 		{
 			numero=prompt("Por Favor inrese un numero Positivo");
 			numero=parseInt(numero);
 		 

 		}
 	
 }	

 function NumerosPares()
 {
 		var numero;
 		var numerosPares;
 		
 		numero=document.getElementById('numero').value;
 		numero=parseInt(numero);
 		numerosPares=numero+2;
 		numerosPares=parseInt(numerosPares);
 		
 		while(numero<1)
 		{
 			numero=prompt("Por Favor inrese un numero Positivo");
 			numero=parseInt(numero);
 		 

 		}
 		while(numerosPares!=0 && numero%2==0)
 		{
 			
 			numerosPares=numerosPares-2;
 			document.write("numero"+numerosPares+"<BR>");
 				
 			
 		}
 		
 }
 
function NumerosImpares()
{		
	
		var numero;
 		var impar=numero;
 		var divisor=100;


 		numero=document.getElementById('numero').value;
 		numero=parseInt(numero);
 		impar=numero+2;
 		impar=parseInt(impar);
 		while(numero<1)
 		{
 			numero=prompt("Por Favor inrese un numero Positivo");
 			numero=parseInt(numero);
 		}
 		while(impar!=1 && numero%2!=0)
 		{
 			impar=impar-2;
			document.write("numero"+impar+"<BR>");
 		}
}		

function NumerosDivisibles()

{
		var numero;
		var divisor=100;
		var divisible;
		numero=document.getElementById('numero').value;
 		numero=parseInt(numero);


		while(divisor!=0)
		{
			divisible=numero%divisor
			if(divisible==0)
			{	
			document.write("numero"+divisor+"<BR>");
			divisor--;
			}
		else
		{

			divisor--;
		}
		}
}
function VerificarPrimo()

{
		var numero;
		var divisor;
		var divisible;
		var primo=0;
		numero=document.getElementById('numero').value;
 		numero=parseInt(numero);
 		divisor=numero;

		while(divisor!=0)
		{
			divisible=numero%divisor
			if(divisible==0)
			{	
			divisor--;
			primo++;
			}
		else
		{

			divisor--;
		}
		
		}

		if(primo ==1)
		{
			alert("Es un numero Primo");
		}
		else
		{
			alert("No es un numero Primo");
		}

}

function NumerosPrimos()

{


	var numero;
	var noEsPrimo;
	var anteriores;

	numero=document.getElementById('numero').value;
 	numero=parseInt(numero);

 	for(recorrido=2;recorrido<=numero;recorrido++)
	{
	noEsPrimo="no";
	for(anteriores=2;anteriores<recorrido;anteriores++)
	{
	
	if(recorrido%anteriores==0)
	{

	noEsPrimo="si"
	break;
	}
	}
	if(noEsPrimo=="si")
	{

	}	
	else
	{
		console.log("el "+recorrido+" es primo");
	}
	}


		/*var numero;
		var divisor;
		var divisible;
		var primo=0;
		var Primos;
		numero=document.getElementById('numero').value;
 		numero=parseInt(numero);
 		divisor=numero;
 		primos;numero;

		while(divisor!=0)
		{
			divisible=numero%divisor
			if(divisible==0)
			{	
			divisor--;
			primo++;
			}
		else
		{

			divisor--;
		}

		}
		while(primo==1)
		{

			
		}*/

		
		
}