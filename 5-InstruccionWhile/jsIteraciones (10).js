function Mostrar()
{

	var contador=0;
	//declarar contadores y variables 
	
	var respuesta="s";
	var numeros;
	var sumaPositivos=0;
	var cantidadPositivos=0;
	var cantidadNegativos=0;
	var cantidadCeros=0;
	var cantidadPares;
	var sumaNegativos=0;
	var promedioPositivos;
	var promedioNegativos;
	var diferencia;
	var numerosPares=0;






	while(respuesta!="n")
	{
	numero=prompt("ingrese numero");
	numero=parseInt(numero);
	
	if(numero%2==0)
	{
		numerosPares++;
	}

	if(numero<0)
	{
		cantidadNegativos++;
		sumaNegativos=numero+sumaNegativos;
	}
	else
	{
		if(numero==0)
		{
			cantidadCeros++;
		}
		else
		{
			cantidadPositivos++;
			sumaPositivos=numero+sumaPositivos;
		}
	}
	respuesta=prompt("quiere seguir agregando numeros");
	}

	promedioPositivos=sumaPositivos/cantidadPositivos;
	promedioNegativos=sumaNegativos/cantidadNegativos;
	diferencia=sumaPositivos + sumaNegativos;

	document.write("La sumaPositivos es "+sumaPositivos+"<BR>");
	document.write("La sumaNegativos es "+sumaNegativos+"<BR>");
	document.write("La cantidadPositivos es "+cantidadPositivos+"<BR>");
	document.write("La cantidadNegativos es "+cantidadNegativos+"<BR>");
	document.write("La cantidadCeros es "+cantidadCeros+"<BR>");
	document.write("El promedioPositivos es "+promedioPositivos+"<BR>");
	document.write("El promedioNegativos es "+promedioNegativos+"<BR>");
	document.write("La Diferencia entre ambos es "+diferencia+"<BR>");
	document.write("La cantidad de numeros Pares es "+numerosPares+"<BR>");





}//FIN DE LA FUNCIÓN