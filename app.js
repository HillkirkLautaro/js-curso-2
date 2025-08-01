// práctica 1
function calculoIMC(peso, altura) {
    alert("El indice de masa corporal (IMC) se calcula como el peso en kg dividido por la altura en metros al cuadrado.");
    peso = parseFloat(prompt("Ingresa tu peso en kg:"));
    altura = parseFloat(prompt("Ingresa tu altura en metros:"));
    const imc = peso / (altura * altura);
    return alert(`Tu IMC es ${imc}`);
}

// práctica 2
function valorFactorial(numero) {
    numero = parseInt(prompt("Ingresa un número para calcular su factorial:"));
    let factorial = 1;
    for (let i = 1; i <= numero; i++) {
        factorial *= i;
    }
    return alert(`El factorial de ${numero} es ${factorial}`);
}