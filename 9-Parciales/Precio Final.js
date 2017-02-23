/*Debemos lograr tomar un nombre con 'prompt' 
y luego mostrarlo por 'alert' al presionar el botón  'MOSTRAR'*/
function Mostar()
{
	var precioBruto;
	var precioFinal;
	
	precioBruto = prompt("Ingrese importe");
	precioBruto=parseInt(precioBruto);
	precioFinal=precioBruto*1.21;

	alert("El precio Final es $"+precioFinal);





    

  
}



