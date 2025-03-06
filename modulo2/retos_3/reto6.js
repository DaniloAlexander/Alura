/* Crea una función que muestre en pantalla la tabla de multiplicar de un número dado como parámetro.*/

function tablaDeMultiplicar (numero){
    let multiplicador = 1;
    while(multiplicador <= 10){
        console.log(numero * multiplicador);
        multiplicador++;
    }
}

tablaDeMultiplicar(2);