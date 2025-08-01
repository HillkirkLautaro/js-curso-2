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

// Práctica 3
function conversionUSD() {
    const dolares = parseFloat(prompt("Ingresa la cantidad en dólares a convertir:"));
    
    if (isNaN(dolares)) {
        return alert("Por favor ingresa un número válido");
    }

    const tasaCambio = 4.80;
    const reales = (dolares * tasaCambio).toFixed(2); // Convertir a dos decimales
    
    return alert(`La conversión de ${dolares} USD a Reales Brasileños es ${reales} BRL`);
}

// práctica 4
function calcularAreaPerimetroRectangulo(ancho, altura) {
    // Calcular área (ancho * altura)
    const area = ancho * altura;
    
    // Calcular perímetro (2*(ancho + altura))
    const perimetro = 2 * (ancho + altura);
    
    // Crear el mensaje con los resultados
    const resultado = `
    Dimensiones de la sala:
    - Ancho: ${ancho} metros
    - Altura: ${altura} metros
    
    Cálculos:
    - Área: ${area} metros cuadrados
    - Perímetro: ${perimetro} metros
    `;
    return alert(resultado);
}

// práctica 5
function calcularAreaPerimetroCircular(radio) {

    // Solicitar el radio al usuario
    radio = parseFloat(prompt("Ingresa el radio de la sala circular en metros:"));
    if (isNaN(radio) || radio <= 0) {
        return alert("Por favor, ingresa un número válido para el radio.");
    }
    const PI = 3.14;
    
    // Calcular área (π * r²)
    const area = PI * Math.pow(radio, 2);
    
    // Calcular perímetro/circunferencia (2 * π * r)
    const perimetro = 2 * PI * radio;
    
    // Mostrar resultados en consola
    resultado=alert(`
    Sala Circular:
    - Radio: ${radio} metros
    - Área: ${area.toFixed(2)} metros cuadrados
    - Perímetro (circunferencia): ${perimetro.toFixed(2)} metros
    `);
    
    return resultado;
}