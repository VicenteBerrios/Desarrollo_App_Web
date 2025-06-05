// Ejercicio 1
let compras = [];
compras.push("pan");
compras.push("leche");
compras.push("huevos");
console.log("Ejercicio 1:", compras);

// Ejercicio 2
let eliminado = compras.pop();
alert("Ejercicio 2: Producto eliminado - " + eliminado);

// Ejercicio 3
let colores = ["rojo", "azul"];
colores.unshift("amarillo");
console.log("Ejercicio 3:", colores);

// Ejercicio 4
let colorEliminado = colores.shift();
alert("Ejercicio 4: Color eliminado - " + colorEliminado);

// Ejercicio 5
let numeros = [10, 20, 30];
numeros.push(40);
numeros.shift();
numeros.unshift(5);
numeros.pop();
console.log("Ejercicio 5:", numeros);

// Ejercicio 6
let orden = [];
orden.unshift(3);
orden.unshift(2);
orden.unshift(1);
console.log("Ejercicio 6:", orden);

// Ejercicio 7
let historial = [];
historial.push("Mensaje 1");
historial.push("Mensaje 2");
historial.push("Mensaje 3");
let mensajeEliminado = historial.pop();
alert("Ejercicio 7: Mensaje eliminado - " + mensajeEliminado);

// Ejercicio 8
let cola = ["Cliente1", "Cliente2", "Cliente3"];
cola.shift();
cola.push("Cliente4");
console.log("Ejercicio 8:", cola);

// Ejercicio 9
let nombres = ["Pedro", "Juan", "Luis"];
nombres.pop();
nombres.unshift("Mateo");
nombres.push("Ana");
console.log("Ejercicio 9:", nombres);

// Ejercicio 10
let pila = [];
pila.push("Elemento 1");
pila.push("Elemento 2");
pila.push("Elemento 3");
alert("Ejercicio 10 - Pila:\nEliminado: " + pila.pop());
alert("Ejercicio 10 - Pila:\nEliminado: " + pila.pop());

let colaNueva = [];
colaNueva.push("Turno 1");
colaNueva.push("Turno 2");
colaNueva.push("Turno 3");
alert("Ejercicio 10 - Cola:\nAtendido: " + colaNueva.shift());
alert("Ejercicio 10 - Cola:\nAtendido: " + colaNueva.shift());

// Ejercicio 11
let dias = ["lunes", "miércoles", "jueves"];
dias.splice(1, 0, "martes");
dias.push("viernes");
console.log("Ejercicio 11:", dias);

// Ejercicio 12
let personas = ["Carlos", "María", "Luis", "Ana", "Sofía"];
personas.shift();
personas.pop();
personas.shift();
personas.unshift("Pedro");
personas.push("Camila");
console.log("Ejercicio 12:", personas);

// Ejercicio 13
let tareas = ["comer", "estudiar", "dormir", "jugar", "ver TV", "navegar"];
tareas.splice(2, 4, "lavar la ropa", "organizar escritorio");
console.log("Ejercicio 13:", tareas);
