console.log("Esto es una app.js");

let numero = 10; // Dato entrada numerico
// let casa123 = 10; // Me muestra error porque se define abajo
numero = true; // Boolenao
numero = "texto"; // tipo String

// Variables - Puede cambiar - 1º Forma

let casa123 = "López";
casa123 = "Pérez";
// Devuelve el ultimo dato
console.log(casa123);
casa123 = 10;
// Devuelve un dato numérico
console.log(casa123);

// Constantes - No se puede cambiar

const DIA_SEMANA = 7;
// DIA_SEMANA = 10; // Nos da error


// Variables - Pueden cambiar - 2º Forma

var casa124 = "Castel";
var casa124 = "Roberto";
var casa124 = "Felipe";
console.log(casa124); // Devuelve la ultima var

// var permite la duplicación mientras que let no.


// Se puede definir una variable sin dar un valor

let casa125, casa126, casa127, casa128;

casa125 = "Pérez";
casa126 = "Castel";
// let casa127 // No se puede utilzar porque se ha declarado anteriormente