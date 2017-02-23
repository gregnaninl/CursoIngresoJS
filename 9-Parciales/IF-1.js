/*Debemos lograr tomar un nombre con 'prompt' 
y luego mostrarlo por 'alert' al presionar el botón  'MOSTRAR'*/
function Mostar()
{
	
	var numeroUno;
	var numeroDos;
	var multiplicacion;
	var suma;
	var resta;


	numeroUno=prompt("ingrese numero Uno");
	numeroDos=prompt("Ingrese nuemro Dos");
	numeroUno=parseInt(numeroUno);
	numeroDos=parseInt(numeroDos);


	if(numeroUno==numeroDos)
	{

		multiplicacion=numeroUno*numeroDos;
		document.write("La Multiplicacion es "+multiplicacion);
	}
	else
	{
		if(numeroUno>numeroDos)
		{
			resta=numeroUno-numeroDos;
			document.write("La Resta es "+resta);
		}
		else
		{
			suma=numeroUno+numeroDos;
			document.write("La Suma es "+suma);
		}


		
	}







}