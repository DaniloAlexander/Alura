//Crea una función que calcule el valor del factorial de un número pasado como parámetro.

function calcularFactorial(numero){
    if (numero === 0 || numero ===1){
        return 1;
    } else { 
        return numero * calcularFactorial(numero - 1)
    }
}
console.log(calcularFactorial(6))
