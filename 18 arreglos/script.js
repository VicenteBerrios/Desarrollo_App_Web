function ejercicio1() {
  let palabras = ["Juan", "corre", "rapidamente", "feliz", "parque"];
  let frase = palabras[0] + " " + palabras[1] + " " + palabras[2] + " en el " + palabras[4] + " " + palabras[3];
  alert(frase);
}

function ejercicio2() {
  let datos = [3, "gatos", "negros", "duermen", "tranquilamente"];
  let frase = "Los " + datos[0] + " " + datos[1] + " " + datos[2] + " " + datos[3] + " " + datos[4];
  alert(frase);
}

function ejercicio3() {
  let matriz = [
    [10, 20, 30],
    [40, 50, 60],
    [70, 80, 90]
  ];
  let suma = matriz[0][1] + matriz[2][0]; 
  alert("La suma de 20 y 70 es " + suma);
}

function ejercicio4() {
  let datos = [
    [1, 2, 3, 4],
    [5, 6, [7, 8, [9, 10]]]
  ];
  let valor1 = datos[0][2];
  let valor2 = datos[1][2][2][1];
  let suma = valor1 + valor2;
  alert("La suma de " + valor1 + " y " + valor2 + " es " + suma);
}

function ejercicio5() {
  let sujeto = ["El perro", "El gato"];
  let acciones = [
    ["ladra", "corre"],
    ["duerme", "salta"]
  ];
  let frase = sujeto[1] + " " + acciones[1][0] + ".";
  alert(frase);
}
