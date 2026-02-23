// === ADIVINA EL NÚMERO - DOM ===

// 1️⃣ Seleccionar elementos del HTML
const inputIntento = document.getElementById('inputIntento');
const btnAdivinar = document.getElementById('btnAdivinar');
const mensaje = document.getElementById('mensaje');
const contador = document.getElementById('contador');
const historial = document.getElementById('historial');
const btnReiniciar = document.getElementById('btnReiniciar');
const tarjeta = document.getElementById('game-card');

console.log("Elementos conectados:", inputIntento, btnAdivinar);
// 2️⃣ Variables del juego
let numeroSecreto = Math.floor(Math.random() * 100) + 1;
let intentos = 0;
let historialIntentos = [];

console.log("(DEBUG) Número secreto:", numeroSecreto);
function mostrarMensaje(texto, color) {
  mensaje.textContent = texto;
  mensaje.style.color = color;
}
function verificarIntento() {
  let valor = Number(inputIntento.value);

  if (isNaN(valor) || valor < 1 || valor > 100) {
    mostrarMensaje("⚠️ Ingresa un número válido (1-100)", "orange");
    return;
  }

  intentos++;
  contador.textContent = "Intentos: " + intentos;

  historialIntentos.push(valor);
  historial.textContent = "Historial: " + historialIntentos.join(", ");

  if (valor === numeroSecreto) {
    mostrarMensaje("🎉 ¡Correcto! Era el " + numeroSecreto, "#00ff88");

    btnAdivinar.disabled = true;
    btnReiniciar.style.display = "inline-block";

    tarjeta.style.borderColor = "#00ff88";
  } else if (valor > numeroSecreto) {
    mostrarMensaje("📈 Muy alto", "#ff6b6b");
  } else {
    mostrarMensaje("📉 Muy bajo", "#4ecdc4");
  }

  inputIntento.value = "";
  inputIntento.focus();
}
btnAdivinar.addEventListener("click", verificarIntento);
function reiniciarJuego() {
  numeroSecreto = Math.floor(Math.random() * 100) + 1;
  intentos = 0;
  historialIntentos = [];

  contador.textContent = "Intentos: 0";
  historial.textContent = "Historial: ";
  mostrarMensaje("🎯 Nuevo juego iniciado", "#e94560");

  btnAdivinar.disabled = false;
  btnReiniciar.style.display = "none";

  tarjeta.style.borderColor = "rgba(233, 69, 96, 0.3)";
}

btnReiniciar.addEventListener("click", reiniciarJuego);