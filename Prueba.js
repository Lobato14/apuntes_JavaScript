console.log("Hola mundo");
let nombre = "Antonio" // Variables String
let edad = 18 // Variable tipo Int
let numeroConDecimales = 15.20 // Variable tipo Float
let esVerdadero = true // Variable tipo Booleano

// Crear funciones
function ejemplo() {
    var a = 5;   // ámbito de función
    let b = 10;  // ámbito de bloque
    if (true) {
        let c = 15;  // ámbito de bloque
    }
}

let a = 5;
let b = 10;
let suma = a + b;            // suma de dos numeros enterps
let concatenacion = "Hola " + "Mundo";  // concatenación de cadenas String
let esMayor = a > b;         // comparación 