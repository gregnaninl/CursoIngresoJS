function Mostrar()
{

	var contador=0;
	// declarar variables
	
	var respuesta='si';
	var edad;
	var maximo;
	var minimo;
	var nombre;
	var mayor;
	var sexo;
	var nota;
	var notaMinimo;
	var aprobados=0;
	var desaprobadasMujeres=0;
	var desaprobadosHombres=0;
	var cantidadDeNotas=0;
	var promedioMujeres;
	var cantidadDeMujeres=0;
	var bandera="";
	var nombreDelDiez;
	var sexoDelDiez;
	var edadDelDiez;



	while(respuesta!='no')
	{
	
		edad=prompt("ingrese edad");
		edad=parseInt(edad);
		while(edad<0 || edad>90)
		{
			edad=prompt("ingrese edad");
			edad=parseInt(edad);
		}
		contador++;
		
		nombre=prompt("ingrese nombre");
		
		
		sexo=prompt("ingrese sexo f femenino o m masculino");
		while( sexo !="f" && sexo !="m"  )
		{
			sexo=prompt("Error!!ingrese sexo f femenino o m masculino");
		}
		

		nota=prompt("ingrese nota")
		while(nota<0 || nota>10)
		{
			nota=prompt("Erro !!ingrese nota");
			nota=parseInt(nota);
		}

		if(nota==10&& bandera=="")
		{
			nombreDelDiez=nombre;
			edadDelDiez=edad;
			sexoDelDiez=sexo;
		}
		
///// cantidad de personas aprobadas
		if(notas>5)
		{
			aprobados=aprobados+1;
		}
////Cantidad de mujeres desaprobadas
	if(nota<5 && sexo=="f")
	{
		desaprobadasMujeres=desaprobadasMujeres+1;
	}
///////cantidad de hombres aprovados
	if(nota<5 &&sexo=="m")
	{
		desaprobadosHombres=desaprobadosHombres+1;
	}

//////cantidad de notas

	if(notas>0)
	{
		cantidadDeNotas=cantidadDeNotas+1;
	}

/////promedio de edad de las mujeres		

	if(sexo=="f")
	{
		cantidadDeMujeres=cantidadDeMujeres+1
		promedioMujeres=promedioMujeres+edad;
	}




		if(contador==1)
		{
		maximo=edad;
		minimo=edad;
		mayor=nombre;
		
		}
		else
		{
			if(edad>maximo)
			{
				maximo=edad;
				mayor=nombre;

			}	
			
			if(edad<minimo)
			{
				minimo=edad;
				menor=nombre;
			}
			}

		if(contador==1)
		{	

			notaMinimo=nota;
			sexoMinimo=sexo;
		
		}
					
			if(nota<notaMinimo)
			{
				notaMinimo=nota;
				sexoMinimo=sexo;
			}
			

			


	
	respuesta=prompt("para salir teclee NO");
	}


	promedioMujeres=promedioMujeres/edad;
	alert(promedioMujeres);

	document.getElementById('maximo').value=maximo+nombre;
	document.getElementById('minimo').value=notaMinimo+sexo;
		



}//FIN DE LA FUNCIÓN