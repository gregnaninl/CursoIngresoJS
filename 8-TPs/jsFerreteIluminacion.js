/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */
function CalcularPrecio () 
{
 	
    var marca;
    var precio=35;
    var precioFinal;
    var precioBruto;
    var cantidadDeLamparas;
    
    cantidadDeLamparas= document.getElementById('Cantidad').value;
    cantidadDeLamparas= parseInt(cantidadDeLamparas);
    precioBruto=cantidadDeLamparas*precio;

    marca=document.getElementById('Marca').value;

    if(cantidadDeLamparas>5)
    
    precioFinal=precioBruto*0.5;

    if(cantidadDeLamparas==5)
        {
    switch(marca)
        {
        case "ArgentinaLuz":
        precioFinal=precioBruto*0.6;
        break;
        case "FelipeLamparas":
        case "JeLuz":
        case "HazIluminacion":
        case "Osram":
        precioFinal=precioBruto*0.70;
        break;
        }

    }   
    else
    {

    if (cantidadDeLamparas==4);
        {
        switch(marca)
        {
        case "ArgentinaLuz":
        case "FelipeLamparas":
        precioFinal=precioBruto*0.75;
        break;
        case "JeLuz":
        case "HazIluminacion":
        case "Osram":
        precioFinal=precioBruto*0.80;
        break;
        }
        }
        else
         {
            if (cantidadDeLamparas==3);
        {
        switch(marca)
        {
        case "ArgentinaLuz":
        case "FelipeLamparas":
        precioFinal=precioBruto*0.85;
        break;
        case "JeLuz":
        case "HazIluminacion":
        case "Osram":
        precioFinal=precioBruto*0.80;
        break;
        }
        }


         }     

    }




        alert(precioFinal);

    /*if(cantidadDeLamparas>5)
    {
        
        precioFinal=precioBruto*0.5;
    
    }

    if(cantidadDeLamparas==5) 
    {
        if(marca=="ArgentinaLuz")
        {
            precioFinal=precioBruto*0.6;
        }    
        else
        {
           precioFinal=precioBruto*0.7; 
        }
    }
    if(cantidadDeLamparas==4) 
    {
        if(marca=="ArgentinaLuz" || marca=="FelipeLamparas")
        {
            precioFinal=precioBruto*0.75;
        }    
        else
        {
           precioFinal=precioBruto*0.8; 
        }
    }
    if(cantidadDeLamparas==3) 
    {
        if(marca=="ArgentinaLuz")
        {
            precioFinal=precioBruto*0.85;
        }    
        else
        {
           
           if(marca=="FelipeLamparas")
           {
            precioFinal=precioBruto*0.90;
           } 
           else
           {
            precioFinal=precioBruto*0.95;
           }
        }
    }

    precioFinal=parseInt(precioFinal);
    var precioConAporte;
    precioConAporte=precioFinal*1.1;
    precioConAporte=parseInt(precioConAporte);
    var aporte;
    aporte=precioFinal*0.1;
    aporte=parseInt(aporte)



    if(precioFinal>120)
    {
       //alert( "IIBB Usted pago $"+precioConAporte+" , siendo $"+aporte+" el impuesto que se pagó");  
        document.getElementById('precioDescuento').value= "IIBB Usted pago $"+precioConAporte+",siendo $"+aporte+" el impuesto pago";
    }
    else
    {
        
        document.getElementById('precioDescuento').value= "El precio Final es $"+precioFinal;
       // alert("El Precio Final es $"+precioFinal);
    }
    */

 	
}
