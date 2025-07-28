function filtrarMultiples(limite, multiplo) {
  let resultado = [];
  for (let i = 1; i <= limite; i++) {
    if (i % multiplo === 0) {
      resultado.push(i);
    }
  }
  return resultado;
}

function mostrarResultado() {
  let limite = parseInt(document.getElementById("limite").value);
  let multiplo = parseInt(document.getElementById("multiplo").value);
  
  if (isNaN(limite) || isNaN(multiplo) || multiplo === 0) {
    document.getElementById("resultado").innerHTML = "Ingresa bien los datos";
    return;
  }

  let numeros = filtrarMultiples(limite, multiplo);

  document.getElementById("resultado").innerHTML = 
    "Resultado: " + numeros.join(", ");
}
