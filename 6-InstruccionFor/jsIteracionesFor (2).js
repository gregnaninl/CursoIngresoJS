function Mostrar()
{

	var mascota;
	var mascotaSi=0;
	var mascotaNO=0;
	var tipoDeMascota;
	var contador=0;
	var edad;
	var edadMasVieja=edad;
	var contadorDeGatos=0;


	for(  ;contador<10;  )
	{





	sexo=prompt("ingrese sexo");
	while(sexo!= "s" && sexo!="n")
	{
	sexo=prompt("ingrese sexo F o M");
	}
	edad=prompt("ingrese edad");
	edad=parseInt(edad);
	while(contador)	


	mascota=prompt("¿Tiene mascota?");
	while( mascota!="s" && mascota!="n")
	{
	mascota=prompt("tiene que responder por si o no!!");
	}
	
	if(mascota=="s")
	{
	mascotaSi++;
	tipoDeMascota=prompt("tiene perro o gato");
	while(tipoDeMascota != "perro" && tipoDeMascota!= "gato")
	{
	tipoDeMascota=prompt("tiene que responder perro o gato");
	}
	if(tipoDeMascota=="gato")
	{

	nombre=prompt("ingrese el nombre del gato");
	edadDelGato=prompt("ingrese edad del Gato");
	while(edadDelGato<0 || edadDelGato>15)
	{
	edadDelGato=prompt("ingrese edad del Gato entre 0 y 15 años");
	}
	if(contadorDeGatos==0)
	{
		edadDelGato=edadDelGato
	}

	

	else
	{
	mascotaNO++;
	}
	edad=prompt("ingrese su edad");
	edad=parseInt(edad);
	if(contador==0)
	{
	edadMasVieja=edad;
	}
	else
	{
	if(edad>edadMasVieja)
	{
	edadMasVieja=edad;
	}

	}
///necesito saber el nombre del primer gato que sea de una mujer mayor a 30 años
///y el gato no tenga mas de 5 años de edad






	contador++;
	}



}