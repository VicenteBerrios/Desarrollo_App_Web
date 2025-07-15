// Ejercicio 1
function repetirPalabra(palabra, veces) {
  let resultado = "";
  for (let i = 0; i < veces; i++) {
    resultado += palabra + " ";
  }
  return resultado.trim();
}

// Ejercicio 2
function compararNumeros(num1, num2) {
  if (num1 > num2) {
    return "El primer numero es mayor";
  } else if (num1 < num2) {
    return "El segundo numero es mayor";
  } else {
    return "Ambos numeros son iguales";
  }
}

// Ejercicio 3
function esParOImpar(numero) {
  return (numero % 2 === 0) ? "El numero es par." : "El numero es impar";
}

// Ejercicio 4
function esPrimo(numero) {
  if (numero < 2) return "No es un numero primo.";
  for (let i = 2; i <= Math.sqrt(numero); i++) {
    if (numero % i === 0) return "No es un numero primo";
  }
  return "Es un numero primo";
}

// Ejercicio 5
function calcularPotencia(base, exponente) {
  let resultado = 1;
  for (let i = 0; i < exponente; i++) {
    resultado *= base;
  }
  return resultado;
}

// Ejecutada desde el boton
function ejecutarEjercicio() {
  let opcion = prompt(
    "Seleccione una opcion:\n" +
    "1. Repetir una palabra N veces\n" +
    "2. Comparar dos numeros\n" +
    "3. Verificar si un numero es par o impar\n" +
    "4. Validar si un numero es primo\n" +
    "5. Calcular potencia con bucle"
  );

  switch (opcion) {
    case "1":
      let palabra = prompt("Ingresa una palabra:");
      let veces = parseInt(prompt("Cuantas veces quieres repetir la palabra?"));
      alert(repetirPalabra(palabra, veces));
      break;
    case "2":
      let num1 = parseFloat(prompt("Ingresa el primer numero:"));
      let num2 = parseFloat(prompt("Ingresa el segundo numero:"));
      alert(compararNumeros(num1, num2));
      break;
    case "3":
      let numero = parseInt(prompt("Ingresa un numero:"));
      alert(esParOImpar(numero));
      break;
    case "4":
      let numPrimo = parseInt(prompt("Ingresa un numero para verificar si es primo:"));
      alert(esPrimo(numPrimo));
      break;
    case "5":
      let base = parseFloat(prompt("Ingresa la base:"));
      let exponente = parseInt(prompt("Ingresa el exponente:"));
      alert("El resultado es: " + calcularPotencia(base, exponente));
      break;
    default:
      alert("Opcion no valida");
  }
}

