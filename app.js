// práctica 1
function calculoIMC(peso, altura) {
    alert("El indice de masa corporal (IMC) se calcula como el peso en kg dividido por la altura en metros al cuadrado.");
    peso = parseFloat(prompt("Ingresa tu peso en kg:"));
    altura = parseFloat(prompt("Ingresa tu altura en metros:"));
    const imc = peso / (altura * altura);
    return alert(`Tu IMC es ${imc}`);
}

// práctica 2
