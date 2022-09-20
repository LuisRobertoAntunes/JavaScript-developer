const nota1 = 1.1
const nota2 = 7.7
const nota3 = 7.8

/*
  Aprovado  >= 7
  Em Recuperaçaco  >= 4 
  Reprovado   <= 3.9 
*/

function minimo(n1, n2) {
  return n1 <= n2 ? n1 : n2
}

function media(n1, n2, n3) {
  const menorNota = minimo(n1, minimo(n2, n3))

  if (menorNota == n1) {
    return (n2 + n3) / 2
  } else if (menorNota == n2) {
    return (n1 + n3) / 2
  } else {
    return (n1 + n2) / 2
  }
}

function mediaStatus(media) {
  if (media >= 7) {
    return 'Aprovado'
  } else if (media >= 4) {
    return 'Recuperação'
  } else {
    return 'Reprovado'
  }
}

const mediaFinal = media(nota1, nota2, nota3)

const statusFinal = mediaStatus(mediaFinal)

console.log(`O Resultado Final do Aluno é ${statusFinal}`)
