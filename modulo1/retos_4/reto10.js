/*10.Crea una variable "nota" y asígnale un valor numérico. 
Utiliza un if-else para determinar si la nota es mayor o igual a 7 y muestra "Aprobado" o "Reprobado" en la consola.*/

let nota = parseInt(prompt("¿Qué nota optuviste?"));
let notaBase = 7;
console.log(nota);

if(nota >= notaBase){
    alert("Aprobado");
} else{
    alert("Reprobado")
}