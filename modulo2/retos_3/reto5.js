/* Crea una función que muestre en pantalla el área y el perímetro de una 
sala circular, utilizando su radio que se proporcionará como parámetro. Considera Pi = 3,14.*/

function areaPerimeto (radio){
    let Pi = 3.1416;
    let area = Pi * (radio * radio);
    let perimetro = 2 * Pi * radio;
    return `Èl área de de circulo es ${area} y el perimetro es ${perimetro}.`
}

console.log(areaPerimeto(10));