// Ejercicio 1

const formRegistro = document.getElementById("formRegistroEstudiante");
const resultadoRegistro = formRegistro.nextElementSibling;
const errorRegistro = resultadoRegistro.nextElementSibling;

let estudiantes = [];

formRegistro.addEventListener("submit", (e) => {
  e.preventDefault();
  errorRegistro.textContent = "";
  resultadoRegistro.textContent = "";

  const nombre = document.getElementById("nombre").value.trim();
  const edad = parseInt(document.getElementById("edad").value);
  const curso = document.getElementById("curso").value;
  const jornada = document.querySelector("input[name='jornada']:checked");
  const aceptaReglamento = document.getElementById("aceptaReglamento").checked;

  if (nombre.length < 2) {
    errorRegistro.textContent = "Debes escribir tu nombre";
    return;
  }
  if (isNaN(edad) || edad < 14 || edad > 100) {
    errorRegistro.textContent = "La edad debe estar entre 14 y 100 años";
    return;
  }
  if (!curso) {
    errorRegistro.textContent = "Debes seleccionar un curso";
    return;
  }
  if (!jornada) {
    errorRegistro.textContent = "Debes seleccionar una jornada";
    return;
  }
  if (!aceptaReglamento) {
    errorRegistro.textContent = "Debes aceptar el reglamento";
    return;
  }

  const nombreN = nombre
    .split(" ")
    .filter(p => p !== "")
    .map(p => p[0].toUpperCase() + p.slice(1).toLowerCase())
    .join(" ");

  const jornadaN = jornada.value.trim(); 

  const registro = { nombre: nombreN, edad, curso, jornada: jornadaN };
  estudiantes.push(registro);

  let conteo = { Manana: 0, Tarde: 0 };
  for (let est of estudiantes) {
    const j = est.jornada.trim().toLowerCase();
    if (j === "manana") conteo.Manana++;
    else if (j === "tarde") conteo.Tarde++;
  }

  resultadoRegistro.textContent =
    `Bienvenido ${nombreN}, tienes ${edad} años y estas en ${curso}. ` +
    `Registrados: ${conteo.Manana} en la Mañana, ${conteo.Tarde} en la Tarde.`;
});

document.getElementById("limpiarRegistro").addEventListener("click", () => {
  resultadoRegistro.textContent = "";
  errorRegistro.textContent = "";
});



// Ejercicio 2
const btnAgregarNota = document.getElementById("agregarNota");
const btnCalcularPromedio = document.getElementById("calcularPromedio");
const btnLimpiarNotas = document.getElementById("limpiarNotas");
const resultadoNotas = document.querySelector("#formNotas + .resultado");
const errorNotas = resultadoNotas.nextElementSibling;

let notas = [];

btnAgregarNota.addEventListener("click", () => {
  errorNotas.textContent = "";
  const inputNota = document.getElementById("nota");
  const valor = parseFloat(inputNota.value);

  if (isNaN(valor) || valor < 1 || valor > 7) {
    errorNotas.textContent = "Debes ingresar una nota entre 1 y 7";
    return;
  }

  notas.push(valor);
  resultadoNotas.textContent = `Notas actuales: ${notas.join(", ")}`;
  inputNota.value = "";
});

btnCalcularPromedio.addEventListener("click", () => {
  errorNotas.textContent = "";
  if (notas.length === 0) {
    errorNotas.textContent = "Debes ingresar al menos una nota";
    return;
  }

  let suma = 0;
  for (let n of notas) suma += n;
  const promedio = (suma / notas.length).toFixed(2);

  const estado = promedio >= 4 ? "Pasas" : "Repites";
  resultadoNotas.textContent =
    `Tus notas: ${notas.length} | Notas: ${notas.join(", ")} | Promedio: ${promedio} -> ${estado}`;
});

btnLimpiarNotas.addEventListener("click", () => {
  notas = [];
  resultadoNotas.textContent = "";
  errorNotas.textContent = "";
});








