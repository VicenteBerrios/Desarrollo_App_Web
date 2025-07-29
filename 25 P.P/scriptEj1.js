function calculaMultiplos() {
    let numero = parseInt(prompt("Ingresa un numero:"));
    let suma = 0;
    for (let i = 1; i <= numero; i++) {
        let multiplo = i * 3;
        if (multiplo % 2 === 0) {
            suma += multiplo;
        } else {
            suma += i;
        }
        console.log("i:", i, "multiplo:", multiplo, "suma:", suma);
    }
    alert("El resultado es: " + suma);
    return suma;
}

let resultado = calculaMultiplos();
console.log("Valor de retorno:", resultado);
