/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resto entre el dividendo y el divisor.
ej.: "El resto es 0 ."*/
function SacarResto()
{


	var dividendo;
	var divisor;
    var resultado;  

	dividendo=document.getElementById('numeroDividendo').value;
	divisor=document.getElementById('numeroDivisor').value;
    dividendo=parseInt(dividendo);
    divisor=parseInt(divisor);
    resultado= dividendo%divisor;
    alert(" El resto es "+resultado+"!!!!!");
    resultado=divisor%dividendo;
    alert(" El resto es "+resultado+"!!!!!");


/*
 var resultado;
 resultado=2%10;
 alert(resultado);
 resultado=10%2;
 alert(resultado);
*/


/*
Esto no funciona -nunca resta por que el numero exacto siempre da 0
	var dividendo;
	var divisor;

	dividendo=document.getElementById('numeroDividendo').value;
	divisor=document.getElementById('numeroDivisor').value;
	var división;
	
	división=parseInt(dividendo)/parseInt(divisor);
   var resto;
   var dif;
   dif=parseInt(divisor)*división;
   resto= parseInt(dividendo)-dif;

   alert(" el resto es "+resto);
   // alert(división); 
   //alert(dif);
*/





}
