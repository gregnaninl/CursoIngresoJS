/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
Mostar el resulto por medio de "ALERT"*/
function sumar()
{

  	var largo;
  	var ancho;
  	var perimetro;
  	var alambre;


  	largo=document.getElementById('numeroUno').value;
  	ancho=document.getElementById('numeroDos').value;
  	largo=parseInt(largo);
  	ancho=parseInt(ancho);
  	perimetro= largo*2 + ancho*2;
  	alambre=perimetro*3;
  	alambre=parseInt(alambre);

  	alert(alambre);







  

 

 
}

