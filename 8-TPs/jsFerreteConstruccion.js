/*2.	Para el departamento de Construcción:
A.	 Mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	Mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{

var largoDelTerreno;
var AnchoDelTerreno;
var radioDelTerreno;
var perimetro

largoDelTerreno= document.getElementById('Largo').value;
AnchoDelTerreno= document.getElementById('Ancho').value;

largoDelTerreno=parseInt(largoDelTerreno);
AnchoDelTerreno=parseInt(AnchoDelTerreno);
perimetro=(largoDelTerreno*2)+(AnchoDelTerreno*2);
alert(perimetro*3);

//alert((parseInt(largoDelTerreno)*2)+(parseInt(AnchoDelTerreno)*2));

}
function Circulo () 
{

var radioDelTerreno;
var perimetroC;

radioDelTerreno= document.getElementById('Radio').value;
radioDelTerreno=parseInt(radioDelTerreno);
//alert(perimetroC);
alert(((((parseInt(radioDelTerreno))*2))*Math.PI)*3);


}
function Materiales () 
{
	
var largoDelTerreno;
var AnchoDelTerreno;
var area;

largoDelTerreno= document.getElementById('Largo').value;
AnchoDelTerreno= document.getElementById('Ancho').value;

area= parseInt(largoDelTerreno)*parseInt(AnchoDelTerreno);

alert((area)*2+" bolsas de cemento "+(area)*3+" bolsas de cal ");



}