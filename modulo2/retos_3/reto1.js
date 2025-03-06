/*Crea una función que calcule el índice de masa corporal (IMC) 
de una persona a partir de su altura en metros y peso en kilogramos, 
que se recibirán como parámetros.*/

function calcularImc(k,m){
    let imc = k / (m * m);
    return imc;
}
console.log(calcularImc(125,180));