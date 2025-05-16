const arreglo = [10, 20, 30, 40, 50, 60]; 

function promedioTresPrimeros() {
  const promedio = (arreglo[0] + arreglo[1] + arreglo[2]) / 3;
  alert("El promedio de los tres primeros elementos es " + promedio);
}

function sumaExtremos() {
  const suma = arreglo[0] + arreglo[arreglo.length - 1];
  alert("La suma del primer y último elemento es " + suma);
}

function diferenciaCentroExtremos() {
  const medio = Math.floor(arreglo.length / 2);
  const sumaExtremos = arreglo[0] + arreglo[arreglo.length - 1];
  const diferencia = arreglo[medio] - sumaExtremos;
  alert("La diferencia entre el elemento central y los extremos es " + diferencia);
}

function multiplicaPares() {
  const producto = arreglo[0] * arreglo[2] * arreglo[4];
  alert("El producto de las posiciones pares (0,2,4) es " + producto);
}

function mensajeSuma() {
  const suma = arreglo[1] + arreglo[3];
  alert("La suma del segundo y cuarto elemento es " + suma + " Gran trabajo con los arreglos");
}
