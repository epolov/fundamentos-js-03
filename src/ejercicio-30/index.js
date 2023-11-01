// Escribe tu código aquí:
// EJERCICIO 30 - Reducir a un solo valor

const numeros = [1,23,44,568,6]
const sumanumeros = numeros.reduce((total, num) => total + num, 0)

console.log(sumanumeros)