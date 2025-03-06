/* Crea una función que convierta un valor en dólares, pasado como parámetro, 
y devuelva el valor equivalente en reales(moneda brasileña,si deseas puedes hacerlo 
con el valor del dólar en tu país). Para esto, considera la cotización del dólar igual a R$4,80. */

function convertirDolares (cantidad,tipoDeCambio){
    let cambio = tipoDeCambio;
    let valor = cantidad;
    return valor * cambio;
}

console.log(convertirDolares(9,4.8))