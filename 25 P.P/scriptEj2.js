function mostrarSecuencia() {
  const numero = parseInt(document.getElementById("numeroInput").value);
  let secuencia = "";

  for (let v = 1; v <= numero; v++) {
    if (v % 4 === 0) {
      secuencia += v + "*";
    } else {
      secuencia += v;
    }
    if (v < numero) {
      secuencia += ", ";
    }
  }

  document.getElementById("resultado").textContent = secuencia;
  return secuencia;
}

