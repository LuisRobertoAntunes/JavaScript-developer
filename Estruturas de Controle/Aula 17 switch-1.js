let nota = 7.4

//Propriedade Ceil arredonta o valor da nota.
switch (Math.ceil(nota)) {
  case 10:
  case 9:
  case 8:
    console.log('Parabéns!')
    break
  case 3:
    console.log('Reprovado!')
    break
  case 1:
    console.log('Muito Reprovado')
    break
  default:
    console.log('Nota Inválida!')
    break
}

console.log('Fim')
