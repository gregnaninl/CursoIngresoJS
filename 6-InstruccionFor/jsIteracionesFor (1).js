function Mostrar()
{
////prueba
	/*var cont=0;

	for(;;) en el for es importante que aiempre se agregen las ; adentro del ()
	{
	console.log(cont);	
	cont++;
	if (cont==5)  e
	{
		break;
	}
	}*/


	var cont=0;
	var cont1=0;
	var cont2=0;
	var cont3=0;
	var cont4=0;
	var cont5=0;
	var cont6=0;
	var cont7=0;
	var cont8=0;
	var cont9=0;
	var cont10=0;

	for(;cont<100000;cont++)
	{

	numeroRandom=Math.floor(Math.random() * 10) + 1;
	//console.log(numeroRandom);
	switch(numeroRandom)
	{
		case 1:
		cont1++;
		break;
		case 2:
		cont2++;
		break;
		case 3:
		cont3++;
		break;
		case 4:
		cont4++;
		break;
		case 5:
		cont5++;
		break;
		case 6:
		cont6++;
		break;
		case 7:
		if(cont7==7000) // no dejo que pase mas del 7%
		{
			continue;
		}
		cont7++;
		break;
		case 8:
		cont8++;
		break;
		case 9:
		cont9++;
		break;
		case 10:
		cont10++;
		break;
	}

	}


	console.log("La cantidad de 1 es "+cont1/cont*100+"%");
	console.log("La cantidad de 2 es "+cont2/cont*100+"%");
	console.log("La cantidad de 3 es "+cont3/cont*100+"%");
	console.log("La cantidad de 4 es "+cont4/cont*100+"%");
	console.log("La cantidad de 5 es "+cont5/cont*100+"%");
	console.log("La cantidad de 6 es "+cont6/cont*100+"%");
	console.log("La cantidad de 7 es "+cont7/cont*100+"%");
	console.log("La cantidad de 8 es "+cont8/cont*100+"%");
	console.log("La cantidad de 9 es "+cont9/cont*100+"%");
	console.log("La cantidad de 10 es "+cont10/cont*100+"%");
	console.log("cantidad de vueltas " +cont);
	contTotal=(cont1+cont2+cont3+cont4+cont5+cont6)
	console.log(contTotal);

}