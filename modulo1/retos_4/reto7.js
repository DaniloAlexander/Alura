/*7.Pide al usuario que ingrese su edad con prompt. Con base en la edad ingresada, 
utiliza un if para verificar si la persona es mayor o menor de edad y muestra un mensaje apropiado en la consola.*/

let edadMayor = 18;
let edadUser = parseInt(prompt("Ingresa tu edad"));
console.log(edadUser);
if(edadMayor <= edadUser){
    alert("Eres mayor de edad");
} else{
    alert("Eres menor de edad");
}