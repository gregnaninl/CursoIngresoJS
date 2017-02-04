/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
	
var precioUno;
var precioDos;
var precioTres;
var total;

precioUno= document.getElementById('PrecioUno').value;
precioDos= document.getElementById('PrecioDos').value;
precioTres= document.getElementById('PrecioTres').value;
//alert(parseInt(precioUno)+parseInt(precioDos)+parseInt(precioTres));
precioUno=parseInt(precioUno);
precioDos=parseInt(precioDos);
precioTres=parseInt(precioTres);
total=(precioUno)+(precioDos)+(precioTres);
alert(" La Suma de Todos los precios es "+total);



}
function Promedio () 
{
	
var precioUno;
var precioDos;
var precioTres;

precioUno= document.getElementById('PrecioUno').value;
precioDos= document.getElementById('PrecioDos').value;
precioTres= document.getElementById('PrecioTres').value;
//alert((parseInt(precioUno)+parseInt(precioDos)+parseInt(precioTres))/3);
precioUno=parseInt(precioUno);
precioDos=parseInt(precioDos);
precioTres=parseInt(precioTres);
total=("el precio promedio es "+((precioUno)+(precioDos)+(precioTres))/3);
alert(total);

}
function PrecioFinal () 
{

var precioUno;
var precioDos;
var precioTres;


precioUno= document.getElementById('PrecioUno').value;
precioDos= document.getElementById('PrecioDos').value;
precioTres= document.getElementById('PrecioTres').value;
//alert((parseInt(precioUno)+parseInt(precioDos)+parseInt(precioTres))*1.21+" precio final + iva");
precioUno=parseInt(precioUno);
precioDos=parseInt(precioDos);
precioTres=parseInt(precioTres);
total=(" El precio Final + iva es "+((precioUno)+(precioDos)+(precioTres))*1.21);
alert(total);


}