//1.Cambia el contenido de la etiqueta h1 con document.querySelector y asigna el siguiente texto: "Hora del Desafío".

let titulo = document.querySelector("h1");
titulo.innerHTML = "Hora del desafio";

let parrafo = document.querySelector("p");
parrafo.innerHTML = "¿Te atreves o eres un miedoso?";

//2.Crea una función que muestre en la consola el mensaje "El botón fue clicado" siempre que se presione el botón "Console".

function botonClicado(){
    console.log("El botón fue clicado");
    return;
}

/*3.Crea una función que se ejecute cuando se haga clic en el botón "prompt", preguntando el nombre de una ciudad de Brasil. 
Luego, muestra una alerta con el mensaje concatenando la respuesta con el texto: "Estuve en {ciudad} y me acordé de ti".*/

function cityName(){
    let ciudadNombre = prompt("Dime el nombre de una ciudad de Brasil.");
    alert(`Estuve en ${ciudadNombre} y me acorde de ti.`)
    return;
}

//4.Crea una función que muestre una alerta con el mensaje: "Yo amo JS" siempre que se presione el botón "Alerta".

function amoLenguaje(){
    alert("Yo amo JS")
    return;
}

//5.Al hacer clic en el botón "suma", pide 2 números y muestra el resultado de la suma en una alerta.

function sumaNumero(){
    let numeroUno = parseInt(prompt("Dame el primer número"));
    let numeroDos = parseInt(prompt("Dame el segundo número"));
    let suma = numeroUno + numeroDos;

    alert(`La suma de los numeros ${numeroUno} y ${numeroDos} da como resultado ${suma}` )
    return;
}
