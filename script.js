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
// --- Operadores aritméticos ---
let a = 20;
let b = 7;

console.log('Suma:', a + b);
console.log('Resta:', a - b);
console.log('Multiplicación:', a * b);
console.log('División:', a / b);
console.log('Módulo:', a % b);

// --- ¿Qué resultado esperas? ---
console.log('5' + 3);
console.log(5 + 3);
console.log('5' - 3);

// --- Template literals ---
let saludo2 = `Hola ${nombreUsuario}, tienes ${edadUsuario} años.`;
console.log(saludo2);

// --- Calculadora de edad ---
let anioActual = 2026;
let anioNacimiento = anioActual - Number(edadUsuario);

console.log(`Hola ${nombreUsuario}, naciste aproximadamente en ${anioNacimiento}.`);