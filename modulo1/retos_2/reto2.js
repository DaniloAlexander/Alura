//2.Verifica si un número ingresado por el usuario es positivo o negativo. Muestra una alerta informativa.
let numeroUsuario = prompt("Ingresa el número a evaluar");
console.log(numeroUsuario);
if (0 > numeroUsuario) {
    alert("¡Tu número es negativo!");
} else {
    alert("¡Tu número es positivo!");
}