function Mostrar()
{
	
	var importe;
	var diaHabil=0;
	var importeMayor;
	var importeMenor;

	importe=prompt("ingrese importe de venta");
	importe=parseInt(importe);
	while(importe<1)
	{
		importe=prompt("ingrese un  importe mayor que 0");
		importe=parseInt(importe);
	}


	importeMenor=importe
	importeMayor=importe

	while(diaHabil<23)
	{
		importe=prompt("ingrese importe de venta");
		importe=parseInt(importe);
		while(importe<1)
		{
			importe=prompt("ingrese un  importe mayor que 0");
			importe=parseInt(importe);
		}

		if(importe>importeMayor)
		{
			importeMayor=importe;
		}

		if(importe<importeMenor)
		{
			importeMenor=importe;
		}

		diaHabil++;

	}

	alert(" El Menor importe es $"+importeMenor+ " El Mayor Importe es $"+importeMayor);








}//FIN DE LA FUNCIÓN