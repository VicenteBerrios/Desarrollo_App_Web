function calcularProducto() {
    let numero = parseInt(prompt("Ingresa un numero"));
    let resultado = 1;
    for (let i = 1; i <= numero; i++) {
        let multiplicador = 1 * 2;
        resultado *= multiplicador;
        console.log("i:", i, "multiplicador:", multiplicador, "resultado:", resultado);
    }
    alert("El producto es: " + resultado);
    return resultado;
}

let valorFinal = calcularProducto();
console.log("Valor final", valorFinal);
