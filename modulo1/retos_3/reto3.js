//3.Crea un programa de cuenta regresiva. Pide un número y cuenta desde 0 hasta ese número utilizando un bucle 'while' en la consola del navegador.
let frase = "Tu número es";
let numeroUsuario = prompt("Ingrese un número entre el 1 y el 10");
console.log(numeroUsuario);
while(numeroUsuario >= 0){
    alert(`${frase} ${numeroUsuario}`);
    numeroUsuario = numeroUsuario -1;
    frase = "Ahora tu número es";
}