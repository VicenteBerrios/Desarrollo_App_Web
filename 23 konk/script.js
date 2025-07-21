// Ejercicio 1
function repetirPalabra(palabra, veces){
    let resultado = "";
    for(let i = 0; i < veces; i++){
        resultado += `${palabra} `//  'hola hola hola hola '
    }
    return resultado.trim(); // trim elimina espacios 'hola hola hola hola'
    // en los extremos
}

function mostrarPalabras(){
let input1 = document.getElementById("input1");
let palabra = input1.value;
let numero = parseInt(prompt("Ingrese cantidad a repetir"));

let resultadoFinal = repetirPalabra(palabra, numero);

document.getElementById("resultado1").textContent = resultadoFinal;
}

// Ejercicio 2
function compararNumeros(a, b) {
    if (a > b) {
        return `El numero ${a} es mayor que ${b}`;
    } else if (b > a) {
        return `El numero ${b} es mayor que ${a}`;
    } else {
        return "Ambos numeros son iguales";
    }
}

function sumarNumeros() {
    let n1 = parseFloat(document.getElementById("num1").value);
    let n2 = parseFloat(document.getElementById("num2").value);

    let resultado = compararNumeros(n1, n2);

    document.getElementById("resultado2").textContent = resultado;
}

// Ejercicio 3
function parOImpar(numero) {
    if (numero % 2 === 0) {
        return `El numero ${numero} es par.`;
    } else {
        return `El numero ${numero} es impar.`;
    }
}

function pares() {
    let num = parseInt(document.getElementById("input3").value);
    let resultado = parOImpar(num);
    document.getElementById("resultado3").textContent = resultado;
}


// Ejercicio 4
function esPrimo(n) {
    if (n <= 1) return `El numero ${n} no es primo.`;

    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) {
            return `El numero ${n} no es primo.`;
        }
    }
    return `El numero ${n} es primo.`;
}

function contadorRegresivo() {
    let numero = parseInt(document.getElementById("input4").value);
    let resultado = esPrimo(numero);
    document.getElementById("resultado4").textContent = resultado;
}


// Ejercicio 5
function calcularPotencia(base, exponente) {
    let resultado = 1;
    for (let i = 0; i < exponente; i++) {
        resultado *= base;
    }
    return `El resultado de ${base} elevado a ${exponente} es: ${resultado}`;
}

function mostrarTablaMultiplicar() {
    let base = parseInt(document.getElementById("base").value);
    let exponente = parseInt(document.getElementById("exponente").value);

    let resultado = calcularPotencia(base, exponente);

    document.getElementById("resultado5").textContent = resultado;
}



