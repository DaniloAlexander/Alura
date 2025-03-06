/* Crea una función que muestre en pantalla el área y 
el perímetro de una sala rectangular, utilizando la altura y la anchura que 
se proporcionarán como parámetros.*/

function calculadorAreaPerimetro(base,altura){
    let area = base * altura;
    let perimetro = 2 * (base+altura);
    return `El área de tu rectangulo es: ${area} y el perimetro es: ${perimetro}.`;
}

console.log(calculadorAreaPerimetro(10,10));