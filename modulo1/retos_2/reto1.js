//1.Pregunta al usuario qué día de la semana es. Si la respuesta es "Sábado" o "Domingo", muestra "¡Buen fin de semana!". De lo contrario, muestra "¡Buena semana!". 
let diaSemana = prompt("¿Qué día de la semana es?");
console.log(diaSemana);
if (diaSemana == "Sábado" || diaSemana == "Domingo") {
    alert("¡Buen fin de semana!");
} else {
    alert("¡Buena semana!");
}