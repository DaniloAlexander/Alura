//4.Crea un programa de cuenta progresiva. Pide un número y cuenta desde 0 hasta ese número utilizando un bucle 'while' en la consola del navegador.
let numeroContador = 0;
let numeroUsuario = prompt("¿Cuál es tu número?");
while(numeroContador <= numeroUsuario){
    alert(numeroContador);
    console.log(numeroContador);
    numeroContador = numeroContador +1;
}