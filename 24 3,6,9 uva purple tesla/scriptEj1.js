function contarVocales(texto) {
    let acumulador = 0;
    for (let i = 0; i < texto.length; i++) {
        if (
            texto[i] === "a" ||
            texto[i] === "e" ||
            texto[i] === "i" ||
            texto[i] === "o" ||
            texto[i] === "u"
        ) {
            acumulador++;
        }
    }
    return acumulador;
}

let resultado = contarVocales("javascript");
alert(resultado);
