// Escribe tu código aquí:
// EJERCICIO 29 - Crear nuevo array con filter()

const array = [1,2,55,66]
// definicion de nuevo array filtrando solo con números pares
const pares = array.filter((num) => num % 2 ===0)

console.log(pares)