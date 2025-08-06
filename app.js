// desafío 1
let listaGenerica = [];
// desafío 2
let lenguagesDeProgramacion = ['JavaScript', 'Python', 'Java', 'C++', 'Ruby'];
// desafío 3
// Agrega a la lista "lenguagesDeProgramacion los siguientes elementos: 'Java', 'Ruby' y 'GoLang'.
lenguagesDeProgramacion.push('Java', 'Ruby', 'GoLang');
// desafío 4
function mostrarLenguajes() {
    console.log("Lista de lenguajes de programación:");
    lenguagesDeProgramacion.forEach(function(lenguaje) {
        console.log(lenguaje);
    });
}
// // desafio 5 //
function mostrarInverso(lenguajesDeProgramacion) {
  for (let i = lenguajesDeProgramacion.length - 1; i >= 0; i--) {
    console.log(lenguajesDeProgramacion[i]);
  }
}

// // desafio 6 //
function calcularPromedio(listaNumeros) {
  if (listaNumeros.length === 0) return 0;
  let suma = listaNumeros.reduce((acc, num) => acc + num, 0);
  return suma / listaNumeros.length;
}

// // desafio 7 //
function mostrarMaximoMinimo(lista) {
  if (lista.length === 0) {
    console.log("Lista vacía");
    return;
  }
  let max = Math.max(...lista);
  let min = Math.min(...lista);
  console.log("Máximo:", max);
  console.log("Mínimo:", min);
}

// // desafio 8 //
function sumaLista(lista) {
  return lista.reduce((acc, num) => acc + num, 0);
}

// // desafio 9 //
function encontrarPosicion(lista, elemento) {
  return lista.indexOf(elemento); // Devuelve -1 si no lo encuentra
}

// // desafio 10 //
function sumarListas(lista1, lista2) {
  if (lista1.length !== lista2.length) {
    throw new Error("Las listas deben tener el mismo tamaño");
  }
  return lista1.map((num, i) => num + lista2[i]);
}

// // desafio 11 //
function cuadradosLista(lista) {
  return lista.map(num => num ** 2);
}
