// Prueba de conexion js!
console.log("Conexión establecida con js!");

// Creacion de variables
let num = 25; // Variable INT (Numero entero)

// Creacion de numero entero 
function numeroEntero() {
    return "Variable Numérica: " + num;
}

// Impresion en consola
console.log(numeroEntero()); // Mostrar Numero Entero


let numeroDecimal = 3.14; // Numero decimal

// Creacion de numero decimal
function numeroDecimalFuncion() {
    return "Variable Decimal: " + numeroDecimal;
}

// Impresion en consola
console.log(numeroDecimalFuncion()); // Mostrar Numero Decimal


let cadenaTexto = "Hola mundo"; // Cadena de texto

// Creacion de cadena de texto
function cadenaTextoFuncion() {
    return "Variable Cadena de Texto: " + cadenaTexto;
}

// Impresion en consola
console.log(cadenaTextoFuncion()); // Mostrar Cadena de Texto


let valorBooleano = true; // Valor booleano

// Creacion de valor booleano
function valorBooleanoFuncion() {
    return "Variable Booleano: " + valorBooleano;
}
// Impresion en consola
console.log(valorBooleanoFuncion()); // Mostrar Valor Booleano


let arregloNumeros = [1, 2, 3, 4]; // Arreglo de numeros

// Creacion de arreglo de numeros
function arregloNumerosFuncion() {
    return "Variable Arreglo de Números: " + arregloNumeros;
}
// Impresion en consola
console.log(arregloNumerosFuncion()); // Mostrar Arreglo de Numeros


let objetoPersona = { nombre: "Juan", edad: 30 }; // Objeto persona

// Creacion de objeto persona
function objetoPersonaFuncion() {
    return "Variable Objeto Persona: nombre = " + objetoPersona.nombre + ", edad = " + objetoPersona.edad;
}
// Impresion en consola
console.log(objetoPersonaFuncion()); // Mostrar Objeto Persona


let valorIndefinido; // Valor indefinido

// Creacion de valor indefinido
function valorIndefinidoFuncion() {
    return "Variable Indefinida: " + valorIndefinido;
}
// Impresion en consola
console.log(valorIndefinidoFuncion()); // Mostrar Valor Indefinido


let valorNulo = null; // Valor nulo

// Creación de valor nulo
function valorNuloFuncion() {
    return "Variable Nula: " + valorNulo;
}
// Impresion en consola
console.log(valorNuloFuncion()); // Mostrar Valor Nulo


let identificadorUnico = Symbol("id"); // Identificador único

// Creacion de identificador unico (Symbol)
function identificadorUnicoFuncion() {
    return "Variable Identificador Único (Symbol): " + identificadorUnico.toString();
}

// Impresion en consola
console.log(identificadorUnicoFuncion()); // Mostrar Identificador unico


let numeroGrande = 1234567890123456789012345678901234567890n; // Numero grande

// Creacion de numero grande (BigInt)
function numeroGrandeFuncion() {
    return "Variable Número Grande (BigInt): " + numeroGrande;
}

// Impresion en consola
console.log(numeroGrandeFuncion()); // Mostrar Numero Grande


const mes = "Mayo"; // Constante

// Creacion de constante mes
function mesFuncion() {
    return "Constante Mes: " + mes;
}

// Impresion en consola
console.log(mesFuncion()); // Mostrar Constante Mes


// Funcion operacion para sumar dos numeros
function operacion(a, b) {
    return "Resultado de la operación (suma): " + (a + b);
}
// Impresion en consola
console.log(operacion(5, 7)); // Mostrar Resultado de la operacion
