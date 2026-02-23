// === ADIVINA EL NÚMERO ===
console.log('=== Adivina el Número ===');

// --- Generar número secreto ---
const numeroSecreto = Math.floor(Math.random() * 100) + 1;

// DEBUG (para ver el número en consola)
console.log('(DEBUG) Número secreto:', numeroSecreto);

// --- Pedir intento ---
let intento = prompt('Adivina el número (1-100):');
intento = Number(intento);

// --- Validar entrada ---
if (isNaN(intento)) {
  alert('⚠️ Eso no es un número. Por favor ingresa un número del 1 al 100.');
  console.log('Entrada inválida: no es número');
} else if (intento < 1 || intento > 100) {
  alert('⚠️ El número debe estar entre 1 y 100.');
  console.log('Entrada inválida: fuera de rango');
} else if (intento === numeroSecreto) {
  alert('🎉 ¡Correcto! El número era ' + numeroSecreto);
  console.log('Resultado: ¡GANÓ!');
} else if (intento > numeroSecreto) {
  alert('📈 Muy alto. Intenta un número más bajo.');
  console.log('Resultado: muy alto');
} else {
  alert('📉 Muy bajo. Intenta un número más alto.');
  console.log('Resultado: muy bajo');
}

// --- Pista de cercanía (ternario) ---
let diferencia = Math.abs(intento - numeroSecreto);
let cercania = diferencia <= 10 ? '🔥 ¡Estás cerca!' : '❄️ Estás lejos';
console.log('Cercanía:', cercania);

// --- Segundo intento (si no acertó y fue válido) ---
if (!isNaN(intento) && intento >= 1 && intento <= 100 && intento !== numeroSecreto) {
  let intento2 = prompt('Intenta de nuevo (1-100):');
  intento2 = Number(intento2);

  if (isNaN(intento2) || intento2 < 1 || intento2 > 100) {
    alert('⚠️ Entrada inválida. El número era ' + numeroSecreto);
    console.log('Segundo intento inválido');
  } else if (intento2 === numeroSecreto) {
    alert('🎉 ¡Correcto en el segundo intento! El número era ' + numeroSecreto);
    console.log('Ganó en segundo intento');
  } else {
    let pista = intento2 > numeroSecreto ? 'alto' : 'bajo';
    alert(`Muy ${pista}. El número era ${numeroSecreto}`);
    console.log('Perdió en segundo intento');
  }
}