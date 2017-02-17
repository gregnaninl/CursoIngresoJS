function Mostrar()
{

	var contador=0;
	var acumulador=0;
	var respuesta='s';
	var numero;
	numero=prompt("ingrese numero");
	numero=parseInt(numero);
	var promedio;


	while (respuesta=="s")
	{

		numero=prompt("ingrese numero");
		numero=parseInt(numero);
		contador++;

		acumulador=acumulador+numero;
		respuesta=prompt("quiere seguir agregando numeros");
		while( respuesta !="s" && respuesta !="n"  )
			
	{


	respuesta = prompt("ingrese s ó n .");

	}
	}

	
	

	promedio=acumulador/contador;



document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=promedio;



}//FIN DE LA FUNCIÓN