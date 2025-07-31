// desafío 1
function saludar() {
    return console.log(`¡Hola mundo!`);
}
// desafío 2
function saludarConNombre(nombre) {
    return console.log(`¡Hola ${nombre}!`);
}
// desafío 3
function dobledenumero(numero) {
    numero = parseInt(prompt("Ingresa un número:"));
    return console.log(`El doble de ${numero} es ${numero * 2}`);
}
// desafío 4
function promedio(a,b,c){
    a = parseFloat(prompt("Ingresa el primer número:"));
    b = parseFloat(prompt("Ingresa el segundo número:"));
    c = parseFloat(prompt("Ingresa el tercer número:"));
    return console.log(`El promedio de ${a}, ${b} y ${c} es ${(a + b + c) / 3}`);
}
// desafío 5
function mayorOmenor(a,b){
    a = parseFloat(prompt("Ingresa el primer número:"));
    b = parseFloat(prompt("Ingresa el segundo número:"));
    if (a > b) {
        return console.log(`${a} es mayor que ${b}`);
    } else if (a < b) {
        return console.log(`${a} es menor que ${b}`);
    } else {
        return console.log(`${a} es igual a ${b}`);
    }
}
// desafío 6
function multiplicarxunomismo(numero) {
    numero = parseInt(prompt("Ingresa un número:"));
    return console.log(`El resultado de multiplicar ${numero} por si mismo es ${numero * numero}`);
}