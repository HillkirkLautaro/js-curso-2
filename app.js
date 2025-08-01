// desafío 1
document.querySelector("h1").innerHTML = "Hora del desafío";
// desafío 2
function consoleclick() {
    console.log("¡Hiciste clic en el botón!");
}
// desafío 3
function BrasilQuestion() {
    let ciudad = prompt("¿Qué ciudad de Brasil te gusta?");
    alert(`Estuve en ${ciudad} y me acordé de ti.`);
}
// desafío 4
function promptclick() {
    alert("Yo amo JS")
}
// desafío 5
function suma() {
    var num1 = parseInt(prompt("Ingrese el primer número:"));
    var num2 = parseInt(prompt("Ingrese el segundo número:"));
    if (isNaN(num1) || isNaN(num2)) {
        alert("Por favor, ingresa números válidos.");
        return;
    }
    var resultado = num1 + num2;
    alert(`El resultado de la suma es: ${resultado}`);
}