let js = 'amazing';
console.log(40+8+23-10);

console.log("Carlos");
console.log(23);

let firstName = "Carlos";
console.log(firstName);

// Data types

let javaScriptIsFun = true;
console.log(javaScriptIsFun);

//console.log(typeof true);
console.log(typeof javaScriptIsFun);
//console.log(typeof 23);
//console.log(typeof 'Carlos');

javaScriptIsFun = 'YES!';
console.log(typeof javaScriptIsFun);

let year;
console.log(year);
console.log(typeof year);

year = '1999';
console.log(typeof year);

console.log(typeof null);

//Let, const & var

//Variable que va a cambiar de valor en el futuro.
let age = 22;
age = 23;

//Variable que se supone que no deberia de cambiar el valor.
const  birthYear = 1999;
//birthYear = 1991;  --> Error
//const job; --> Variable ilegal.

//Operadores basicos

const now = 2021;
const ageCarlos = now - 1999;
const ageBrenda = now - 2000;
console.log(ageCarlos, ageBrenda);

console.log(ageCarlos *2, ageCarlos/10, 2 ** 3);
// 2 ** 3 = 2 * 2 * 2

const primerNombre = 'Carlos';
const apellido = 'Lopez';
console.log(primerNombre + ' ' + apellido);

let x = 10+5; // 15
x += 10; // x = x+10  =25 contador
x *= 4; // x = x*4 = 100
x++; // x = x+1
x--; 
console.log(x);

//Operadores de comparacion

console.log(ageCarlos > ageBrenda); //>, <, >=, <=
console.log(ageBrenda >= 18);

const isFullAge = ageBrenda >= 18;

console.log(now - 1999 > now - 2000);