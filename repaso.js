//Desafíos 1

	//1. Muestra una alerta con el mensaje "¡Bienvenida y bienvenido a nuestro sitio web!".
		alert("¡Bienvenida y bienvenido a nuestro sitio web!");

	//2. Declara una variable llamada nombre y asígnale el valor "Lua".
		let nombre = "Lua";

	//3. Crea una variable llamada edad y asígnale el valor de 25.
		let edad = 25; 

	//4. Estable una variable numeroDeVentas y asígnale el valor de 50.
		let numeroDeVentas = 50;

	//5. Establece una variable saldoDisponible y asígnale el valor de 1000.
		let saldoDisponible = 1000;

	//6.Muestra una alerta con el texto "¡Error! Completa todos los campos".
		alert("!Error¡ Completa todos los campos");

	/*7. Declara una variable llamada mensajeDeError y asígnale el valor "!Error¡ Completa todos los campos". Ahora muestra 
	una alerta con el valor de la variables mensajeError.*/
		let mensajeError = "!Error¡ Completa todos los campos.";
		alert(mensajeError)

	//8 Utiliza un prompt para preguntar el nombre de usuario y almacénalo en la variable nombre.
		let nombre = prompt("¿Cuál es el nombre de usuario?");

	//9. Pide al usuario que ingrese su edad usando un prompt y almacénala en la variable edad.
		let edad = prompt("¿Cuál es tu edad?");

	//10. Ahora, si la edad es mayor o igual a 18, muestra una alerta con el mensaje "¡Puedes obtener tu licencia de conducir!".
		let edadParaLicencia = 18;
		let edad = prompt("¿Cuál es tu edad?");
		console.log(edad);
		if(edad >= edadParaLicencia){
			alert("¡Puedes obtener tu licencia!");
		}

//Desafíos 2

	/*1. Pregunta al usuario qué día de la semana es, Si la respuesta es "Sábado" o "Domingo", muestra "¡Buen fin de semana!".
	De lo contrario, muestra "¡Buena semana!"*/
		let diaSemana = prompt("¿Qué día de la semana es?");
		console.log(diaSemana);
		if(diaSemana == "Sábado" || diaSemana == "Domingo"){
			alert("¡Buen fin de semana!");
		} else {
			alert("¡Buena semana!");
		}

	//2. Verifica si un número ingresado por el usuario es positivo o negativo. Muestra una alerta informativa. 
		let numeroUsuario = prompt("Ingresa un número:");
		console.log(numeroUsuario);
		if(numeroUsuario < 0){
			alert("Tú número es negativo.");
		} else{
			alert("Tu número es positivo.");
		}

	/*3. Crea un sistema de puntuación para un juego. Si la puntuación es mayor o igual a 100, muestra 
	"¡Felicidades, has ganado!". En caso contrario, muestra "Intentalo nuevamente para ganar.".*/
		let puntuacionObtenida = prompt("¿Cuál fue tu puntuación?");
		console.log(puntuacionObtenida);
		if(puntuacionObtenida >= 100){
			alert("¡Felicidades, has ganado!");
		} else{
			alert("Intentalo nuevamente para ganar");
		}

	/*4. Crea un mensaje que informe al usuario sobro el saldo de su cuenta, 
	utilizando un template string para incluir el valor del saldo.*/
		let saldo = 1000:
		console.log(saldo);
		alert(`Tu saldo es de $ ${saldo} dolares.`);

	/*5. Pide al ususario que ingrese su nombre mediante un prompt. Luego, muestra una alerta de bienvenidad usando ese nombre.*/
		let nombreDeUsuario = prompt("¿Cuál es tu nombre?");
		console.log(nombreDeUsuario);
		alert(`¡Bienvenido/a, ${numeroDeUsuario}`);

//Desafíos 3

	/*1. Crea un contador que comience en 1 y vaya hasta 10 usando un bucle "While". Muestra cada número*/
		let numero = 1;
		console.log(numero);
		while(numero <= 10){
			alert(numero);
			numero++;
		}

	/*2. Crea un contador que comience en 10 y vaya hasta 0 usando un bucle "while" Muestra cada número*/
		let numero = 10;
		console.log(numero);
		while(numero >= 1);{
			alert(numero);
			numero--;
		}

	/*3. Crea un programa de cuenta progresiva. Pide un número y cuenta desde 0 hasta ese número utilizando un bucle 
	"while" en lca consola del navegador*/
		let numeroUsuario = prompt("Ingrese un nuemro entre el 1 y el 10");
		let contador = 0;
		console.log(numeroUsuario);
		while(contador <= numeroUsuario){
			if(numeroUsuario > 10){
				alert("Tu número no esta en el rango solicitado");
				break;
			}else {
				alert(`Mostrar ${contador}`);
			}
		contador++;
		}

	/*4. Crea un programa de cuenta regresiva. Pide un número y cuenta desde ese número hasta 0 utilizando un bucle
	"while" en la consola del navegador*/
		let numeroUsuario = prompt("Ingresa un numeero entre el 1 y el 10");
		while(numeroUsuario >= 0){
			if(numeroUsuario > 10){
				alert("Tu número esta fuera del rango solicitado");
				break;
			}else{
				alert(`El número es ${numeroUsuario}`)
				numeroUsuario--;
			}
		}

//Desafíos 4
	
	/*1. Crea un programa que utilice un console.log para mosrar un mensaje de bienvenida.*/
		let mensaje = "¡Bienvenido!";
		console.log(mensaje);

	/*2. Crea una variable llamada "nombre" y asígnale tu nombre. Luego, utiliza alert para mostrar el 
	mensaje "¡Hola, [tu nombre]!*/
		let nombre = "Danilo";
		console.log(`¡Hola, ${nombre}`);

	/*3. Crea una variable llamada "nombre" y asígnale tu nombre. Luego, utiliza alert para mostrar el 
	mensaje "Hola, [tu nombre]*/
		let nombre = "Danilo";
		alert(`¡Hola, ${nombre}`);

	/*4. Utiliza prompt y haz la siguiente pregunta ¿Cuál es el lenguaje de programación que más te gusta?. 
	Luego, almacena la respuesta en unca variable y muestra la respuesta en la consola del navegador*/
		let lenguajeFavorito = prompt("¿Cuál es tu lenguaje de programación favorito?");
		console.log(lenguajeFavorito);

	/*5. Crea una variablle llamada "valor1" y otra llamada "valor2", asígnandoles valores numéricos de tu elección.
	Luego, realiza la suma de estos dos valores y almacena el resultado en una tercera variable llamada "resultado".
	Utiliza console.log para mostrar el mensaje "La suma de [valor1] y [valor2] es igual a [resultado]." en la consola.*/
		let valor1 = 3;
		let valor2 = 2;
		let resultado = valor1 + valor2;
		console.log(`La suma de ${valor1} y ${valor2} es igual a ${resultado}.`)

	/*6. Crea una variablle llamada "valor1" y otra llamada "valor2", asígnandoles valores numéricos de tu elección.
	Luego, realiza la resta de estos dos valores y almacena el resultado en una tercera variable llamada "resultado".
	Utiliza console.log para mostrar el mensaje "La diferencia entre [valor1] y [valor2] es igual a [resultado]." en la consola.*/
		let valor1 = 3;
		let valor2 = 2;
		let resultado = valor1 - valor2;
		console.log(`La diferencia entre ${valor1} y ${valor2} es igual a ${resultado}.`)

	/*7. Pide al usuario que ingrese su edad con prompt. Con base en la edad ingesada, utiliza un if para verificar
	si la persona es mayor o menor de edad y muestra un mensaje apropiado en la consola.*/
		let edadMinima = 18; 
		let nombrePedido = parseInt(prompt("¿Cuál es tu edad?"));
		console.log(nombrePedido);
		if(nombrePedido >= edadMinima){
			alert("¡Felicidad, ya eres mayor de edad!");
		}else{
			alert("Lo siento, aún eres menor de edad.");
		}

	/*8. Crea una variable "numero" y solicita un valor con prompt. Luego, verifica  si es positivo, negativo o cero
	utilizando if-else y muestra el mensaje correspondiente.*/
		let numero = parseInt(prompt("Ingresa el número que quieras evaluar:"));
		console.log(numero);
		if (numero < 0){
			alert("Tu número es negativo");
		} 
		else {
			if (numero > 0){
				alert("Tu número es positivo");
			}
			else {
				alert("Tu número es cero");
			} 
		}
	
	/*9. Utiliza un bucle while para mostrar los número del 1 al 10 en la consola*/
		let contador = 1;
		let hastaAdonde = 10;
		while(contador <= hastaAdonde){
			console.log(contador);
			contador++;
		}

	/*10. Crea una variable "nota" y asígnale un valor numérico. Utiliza un if-else para determinar si la nota
	es mayor o igual a 7 y muestra "Aprobado" o "Reprobado" en la consola.*/
		let nota = parseInt(prompt("¿Cuál fue tu nota?"));
		let parametro = 7;

		if(nota >= parametro){
			console.log("¡Bien hecho, aprovaste!");
		} else {
			console.log("Lo siento, reprobaste");
		}

	/*11. Utiliza Math.random para generar cualquier número aleatorio y muesta ese número en la consola*/
		let numeroRandom = Math.random();
		console.log(numeroRandom);

	/*12. Utiliza Math.random para generar un número entero entre el 1 y el 10 y muesta ese número en la consola*/
		let numeroRandom = Math.floor(Math.random()*10 + 1);
		console.log(numeroRandom);

	/*13. Utiliza Math.random para generar un número entero entre el 1 y el 1000 y muesta ese número en la consola*/
		let numeroRandom = Math.floor(Math.random()*1000 + 1);
		console.log(numeroRandom);

//Desafíos 5

	/*1. Crear una función que muestre "¡Hola, mundo!" en la consola.*/
		function mensaje (texto){
			console.log(texto);
			return;
		}

		mensaje("¡Hola, mundo!");

	/*2. Crea una función que reciba un nombre como parámetro y muestre y muestre "¡Hola, [nombre]!"*/
		function nombre (texto){
			console.log(`¡Hola, ${texto}!`);
			return;
		}

		nombre("Danilo");

	/*3. Crer una función que reciba un número como parámetro y devuelva el doble de ese número*/
		function numeroDuplicado(numero){
			let multiplicador = numero * 2;
			console.log(multiplicador);
			return;
		}

		numeroDuplicado(4);

	/*4. Crear una función que reciba tre número como parámetro y devuelva su promedio*/
		function promediador (numero1,numero2,numero3){
			let divisor = parseInt(numero1+numero2+numero3)/3;
			console.log(divisor);
			return;
		}

		promediador(2,2,2);

	/*5. Crear una función que reciba dos números como parámetros y devuelva el mayor de ellos.*/
		function quienEsMayor(num1,num2){
			let number1 = num1;
			let number2 = num2;
			if(number1 > number2){
				console.log(number1);
			} else {
				console.log(number2);
			}
			return;
		}

		quienEsMayor(7,8);

	/*6. Crear una función que reciba un número como parámetro y devuelva el resultado de multiplicar
	ese número por sí mismo*/
		function porMiMismo (number){
			let multiplicador = number * number;
			console.log(multiplicador);
			return;
		}

		porMiMismo(2);

//Desafíos 6

	/*2. Crear una función que calcule el índice de mada corporal (IMC) de una persona a partir 
	de su altura en metros y peso en kilogramos, que se recibirán como parametros*/
		let peso = parseInt(prompt("Indique su peso en kilogramos"));
		let altura = parseInt(prompt("Indique su altura en metros")*100);

		function imcCalculator (){
			let calculator = (peso / (altura * altura));
			alert(`Tu IMC es de ${calculator}`);
			return
		}

		imcCalculator();

	/*2. Crea una función que calcule el valor del factorial de un número pasado como parámetro .*/
		let factorialDefinido = parseInt(prompt("Ingrese el número que deseés saber su factorial:"));
		let memoria = 1;
		let contador = factorialDefinido;

		function convertiFactorial (){
			while (contador > 1){
				memoria = memoria * contador;
				contador--;
			}
			console.log(`El factorial de ${factorialDefinido} es ${memoria}`)
		}

		convertiFactorial();

	/*3. Crea una función que convierta un valor en dólares, pasado como parámetro, y devuleva el valor
	equivalente a colones salvadoreños. Para esto, considera la cotización del dólar igua a $0.11*/
		let cantidad = parseInt(prompt("¿Cuátos colones deseas convertir?"));
		let tasaDeCambio = 8.76;

		function convertidor (){
			let conversor = cantidad * tasaDeCambio;
			console.log(conversor);
		}

		convertidor();

	/*4. Crea una función que muestre en pantalla el área y el perímetro de una sala rectangular, 
	utilizando la altura y la anchura que se proporcionarán como parámetros.*/
		function areaPerimetro (altura,anchura) {
			let area = altura * anchura;
			let perimetro  = (2*altura)+(2*anchura);
			console.log(`El Área de tu sala es de ${area} y el Perimetro de ${perimetro}.`);
		}

		areaPerimetro(2,3);

	/*5. Crea una función que muestre en pantalla el área y el perímetro de una sala circular, utilizando 
	su radio que proporcionará como parámetro. Considera Pi = 3,14.*/
		function areaPerimetro (radio) {
			let area = 3.1416 * (radio *radio);
			let perimetro  = (2 * 3.1416) * radio;
			console.log(`El Área de tu sala es de ${area} y el Perimetro de ${perimetro}.`);
		}

		areaPerimetro(2);

	/*6. Crea una función que muestre en pantalla la tabla de multiplicar de un número dado como parámetro*/
		function tablaDeMultiplicar (n){
			let contador = 1;
			while (contador <= 10){
				console.log(n * contador);
				contador++;
			}
		} 

		tablaDeMultiplicar (5);

//Desafíos 7

	/*1. Crea una lista vacía llamada "listaGenerica"*/
		let listaGenerica = [];

	/*2. Crea una lista de lenguajes de programación llamada "lenguajesDeProgramacion" con los siguientes elementos:
	'JavaScript','C','C++','Kotlin' y 'Python'.*/
		let lenguajesDeProgramacion = ['JavaScript','C','C++','Kotlin','Python'];

	/*3. Agrega a la lista "lenguajesDeProgramacion" los siguiente elementos: 'Java','Ruby' y 'GoLang'.*/
		let lenguajesDeProgramacion = ['JavaScript','C','C++','Kotlin','Python'];
		lenguajesDeProgramacion.push('Java','Ruby','GoLang');

	/*4. Crea una función que muestre en la consola todos los elementos de la lista "lenguajesDeProgramacón en orden inverso"*/
		let lenguajesDeProgramacion = ['JavaScript','C','C++','Kotlin','Python'];
		lenguajesDeProgramacion.push('Java','Ruby','GoLang');

		function ordenInverso (){
			
		}