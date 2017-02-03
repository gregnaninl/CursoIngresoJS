/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	

	
	var numeroUno;
	var numeroDos;
    var sumar;

	numeroUno= document.getElementById('numeroUno').value;
	numeroDos= document.getElementById('numeroDos').value;
    sumar=parseInt(numeroUno)+parseInt(numeroDos);
    //alert(parseInt(numeroUno)+parseInt(numeroDos));
    alert("la suma es "+sumar); 

}

function restar()
{
	var numeroUno;
	var numeroDos;
    var Resta;

	numeroUno= document.getElementById('numeroUno').value;
	numeroDos= document.getElementById('numeroDos').value;
    Resta=parseInt(numeroUno)-parseInt(numeroDos);
    
    alert("la resta es "+Resta); 

}

function multiplicar()
{ 
	var numeroUno;
	var numeroDos;
    var multiplicar;

	numeroUno= document.getElementById('numeroUno').value;
	numeroDos= document.getElementById('numeroDos').value;
    multiplicar=parseInt(numeroUno)*parseInt(numeroDos);
    
    alert("la multiplicación es "+multiplicar); 
}

function dividir()
{
	var numeroUno;
	var numeroDos;
    var dividir;

	numeroUno= document.getElementById('numeroUno').value;
	numeroDos= document.getElementById('numeroDos').value;
    dividir=parseInt(numeroUno)/parseInt(numeroDos);
    
    alert("la división es "+dividir); 
}


