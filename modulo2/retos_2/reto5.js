//Crear una función que reciba dos números como parámetros y devuelva el mayor de ellos.

function mayorOMenor(a,b) {
    if (a > b){
        return a;
    } else {
        return b; 
    }
    
}

let numero = mayorOMenor(7,5);
console.log(`El número mayor es: ${numero}`);

