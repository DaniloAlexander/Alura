/*5.Crea una variable llamada "valor1" y otra llamada "valor2", asignándoles valores numéricos de tu elección. Luego, 
realiza la resta de estos dos valores y almacena el resultado en una tercera variable llamada "resultado". 
Utiliza console.log para mostrar el mensaje "La diferencia de [valor1] y [valor2] es igual a [resultado]." en la consola*/

let valor1 = parseInt(prompt("Ingresa el primer valor"));
let valor2 = parseInt(prompt("Ingresa el segundo valor"));

let resultado = valor1 - valor2;
console.log(`la diferencia entre ${valor1} y ${valor2} es igual a ${resultado}`);