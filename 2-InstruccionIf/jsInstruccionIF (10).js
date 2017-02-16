function Mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
	

numeroRandom=Math.floor(Math.random() * 10) + 1;
//alert(numeroRandom);
//console.log(numeroRandom);

if(numeroRandom>8)
{
	alert("Su nota es "+numeroRandom+" EXCELENTE");
	//document.getElementById('FormIngreso').value=numeroRandom+" EXCELENTE";
}
else
{

	if(numeroRandom<5)
{
	alert("Su nota es "+numeroRandom+" Vamos, la proxima se puede ");
	//document.getElementById('FormIngreso').value=numeroRandom+" Vamos, la proxima se puede";
}
else
{
	alert(" Su nota es "+numeroRandom+" APROBÓ");
	//document.getElementById('FormIngreso').value=numeroRandom+" APROBÓ";
}
}

}//FIN DE LA FUNCIÓN