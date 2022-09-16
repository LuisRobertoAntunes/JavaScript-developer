/*
 Conceito           Faixa de no
                   correspondente

    A             Entre 9,0 e 10,0
    B             Entre 7,0 e 8,9
    C             Entre 5,0 e 6,9
    D             Entre 4,5 e 4,9
    F             Abaixo de 4,5

*/

const nota = 10

if (nota >= 9.0 && nota <= 10) {
  console.log('A') 
} else if (nota >= 7 && nota <= 8.9) {
  console.log('B')
} else if (nota >= 5 && nota <= 6.9) {
  console.log('C')
} else if (nota >= 4.5 && nota <= 4.9) {
  console.log('D')
} else if (nota >= 0 && nota < 4.5) {
  console.log('F')
} else console.log('Nota Invalida!')

console.log('Fim')
