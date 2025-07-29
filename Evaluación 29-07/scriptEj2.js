function contarPares(n) {
  let contador = 0;

  for (let v = 1; v <= n; v++) {
    if (v % 2 === 0) {
      contador++;
    }
  }

  return contador;
}

function contarDesdeInput() {
  const input = document.getElementById("numeroInput");
  const numero = parseInt(input.value);
  const resultadoElemento = document.getElementById("resultado");

  if (isNaN(numero) || numero < 1) {
    resultadoElemento.textContent = "Ingresa un numero";
    return;
  }

  const cantidadPares = contarPares(numero);
  const mensaje = `Hay ${cantidadPares} numeros pares entre 1 y ${numero}`;

  resultadoElemento.textContent = mensaje;
  console.log(mensaje);
}

