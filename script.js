// --- Variables con let (pueden cambiar) ---
let nombre = 'Ramiro';
let edad = 16;
let estaAprendiendo = true;

// --- Imprime cada variable ---
console.log(nombre);
console.log(edad);
console.log(estaAprendiendo);

// --- Verifica los tipos de dato ---
console.log(typeof nombre);
console.log(typeof edad);
console.log(typeof estaAprendiendo);

// --- Variables con const (no pueden cambiar) ---
const curso = 'Code 101';
const maxIntentos = 10;

console.log(curso);
console.log(maxIntentos);

// --- Entrada del usuario ---
let nombreUsuario = prompt('¿Cómo te llamas?');
let edadUsuario = prompt('¿Cuántos años tienes?');

// --- Salida al usuario ---
alert('Hola ' + nombreUsuario + ', tienes ' + edadUsuario + ' años.');

// --- Verifica en consola ---
console.log('Nombre:', nombreUsuario);
console.log('Edad:', edadUsuario);
console.log('Tipo de edad:', typeof edadUsuario);