function Mostrar()
{

	var contador=0;
	var positivo=0;
	var negativo=1;
	
	var respuesta='s';


	var numero;
	numero=prompt("ingrese numero");
	numero=parseInt(numero);
	
	while(respuesta =="s")
	{
		numero=prompt("ingrese numero");
		numero=parseInt(numero);
		if(numero>-1)
		{
			

			contador++;
			positivo=positivo+numero;
		}
		else
		{
			
			contador++;
			negativo=negativo*numero;
		}
		respuesta=prompt("quiere seguir agregando numeros");
		while( respuesta !="s" && respuesta !="n"  )
			{


		respuesta = prompt("ingrese s ó n .");

		}
	}

	
	document.getElementById('suma').value=positivo;
	document.getElementById('producto').value=negativo;



}//FIN DE LA FUNCIÓN