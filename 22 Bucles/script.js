//muestra los resultados en el HTML
function mostrar(titulo, contenido) {
    const div = document.getElementById("resultado");
    div.innerHTML = `<h2>${titulo}</h2><p>${contenido.replace(/\n/g, '<br>')}</p>`;
  }
  
  // Ejercicio 1
  function ejercicio1() {
    let n = parseInt(prompt("Ingresa un numero:"));
    if (isNaN(n)) return mostrar("Ejercicio 1", "Entrada no valida.");
    let salida = "";
    for (let i = 1; i <= n; i++) salida += i + " ";
    mostrar("Ejercicio 1", salida);
  }
  
  // Ejercicio 2
  function ejercicio2() {
    let suma = 0, i = 0;
    while (i < 5) {
      let num = parseFloat(prompt(`Numero ${i + 1}:`));
      if (!isNaN(num)) {
        suma += num;
        i++;
      }
    }
    mostrar("Ejercicio 2", "Suma total: " + suma);
  }
  
  // Ejercicio 3
  function ejercicio3() {
    let salida = "";
    for (let i = 1; i <= 20; i++) {
      if (i % 2 === 0) salida += i + " ";
    }
    mostrar("Ejercicio 3", salida);
  }
  
  // Ejercicio 4
  function ejercicio4() {
    let n = parseInt(prompt("Ingresa un numero: "));
    let salida = "";
    if (isNaN(n)) {
      salida = "Entrada no valida.";
    } else if (n < 0) {
      salida = "Numero no valido";
    } else {
      while (n >= 0) {
        salida += n + " ";
        n--;
      }
    }
    mostrar("Ejercicio 4", salida);
  }
  
  // Ejercicio 5
  function ejercicio5() {
    let n = parseInt(prompt("Numero para la tabla:"));
    if (isNaN(n)) return mostrar("Ejercicio 5", "Entrada no valida");
    let salida = "";
    for (let i = 1; i <= 10; i++) {
      salida += `${n} x ${i} = ${n * i}\n`;
    }
    mostrar("Ejercicio 5", salida);
  }
  
  // Ejercicio 6
  function ejercicio6() {
    let suma = 0, num;
    while (true) {
      num = parseFloat(prompt("Ingresa un numero: "));
      if (isNaN(num)) continue;
      if (num === 0) break;
      suma += num;
    }
    mostrar("Ejercicio 6", "Suma total: " + suma);
  }
  
  // Ejercicio 7
  function ejercicio7() {
    let palabra = prompt("Ingresa una palabra:");
    if (!palabra) return mostrar("Ejercicio 7", "Entrada vacia");
    let salida = "";
    for (let letra of palabra) salida += letra + "\n";
    mostrar("Ejercicio 7", salida);
  }
  
  // Ejercicio 8
  function ejercicio8() {
    let pass;
    do {
      pass = prompt("Ingresa la contraseña:");
    } while (pass !== "admin123");
    mostrar("Ejercicio 8", "Acceso concedido");
  }
  
  // Ejercicio 9
  function ejercicio9() {
    let cant = parseInt(prompt("¿Cuantas notas ingresaras?"));
    if (isNaN(cant) || cant <= 0) return mostrar("Ejercicio 9", "Cantidad no valida.");
    let suma = 0;
    for (let i = 1; i <= cant; i++) {
      let nota = parseFloat(prompt(`Nota ${i}:`));
      if (!isNaN(nota)) suma += nota;
      else i--;
    }
    let promedio = (suma / cant).toFixed(2);
    mostrar("Ejercicio 9", "Promedio: " + promedio);
  }
  
  // Ejercicio 10
  function ejercicio10() {
    let cant = parseInt(prompt("¿Cuantas personas?"));
    if (isNaN(cant) || cant <= 0) return mostrar("Ejercicio 10", "Cantidad no valida.");
    let mayores = 0;
    for (let i = 1; i <= cant; i++) {
      let edad = parseInt(prompt(`Edad persona ${i}:`));
      if (!isNaN(edad) && edad >= 18) mayores++;
    }
    mostrar("Ejercicio 10", `Mayores de edad: ${mayores}`);
  }
  
  
