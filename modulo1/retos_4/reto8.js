/*8.Crea una variable "numero" y solicita un valor con prompt. +
Luego, verifica si es positivo, negativo o cero utilizando un if-else y muestra el mensaje correspondiente.*/

let numeroUser = parseInt(prompt("Ingresa un número"));
console.log(numeroUser);
if(numeroUser > 0){
    alert("Tu número es positivo");
} else{
    if(numeroUser == 0){
        alert("Tu número es 0");
    } else{
        alert("Tu número es negativo");
    }
}
