const numeros = [1, 2, 3, 4, 5]

numeros[0] = 100 // Altera um valor do array
numeros.push(6) // Adicionar um elemento no array
console.log(numeros.join(',')) // Junta todos os elementos separados por ","
console.log(numeros.includes(10)) // Verifica se determinado elementos esta incluso no array
console.log(numeros.indexOf(4)) // Retorna o indice do elemento (4)
const numeros2 = numeros.concat(7, 8, 9) // Gera um novo array

console.log(numeros)
console.log(numeros2)
