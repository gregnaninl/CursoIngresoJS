function Mostrar()
{
//tomo la edad  
	var mesDelAño = document.getElementById('mes').value;

	//alert (mesDelAño);
	
	switch (mesDelAño)
{
    case "Enero":       
    case "Abril":        
    case "Junio":       
    case "Agosto":                
    case "Octubre":         
    case "Diciembre":
        alert("tiene 31 días!!!");
        break;        
    case "Febrero":
        alert("tiene 28 días");
        break;
    case "Marzo":
    case "Mayo":
    case "Julio":
    case "Septiembre":
    case "Noviembre":
        alert("tiene 30 días!");
        break;
   
}

	



}//FIN DE LA FUNCIÓN