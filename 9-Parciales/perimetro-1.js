/*Debemos lograr tomar un dato por 'ID'
y luego mostrarlo por 'Alert' al presionar el botón  'MOSTRAR'*/
function Mostar()
{
	

	var base;
	var perimetro;


	base= document.getElementById('Base').value;
	base=parseInt(base);
	perimetro=base*4;

	alert("El Perimetro es "+perimetro);

}


