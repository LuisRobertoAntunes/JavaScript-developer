function executar(funcao, n1, n2) {
  if (typeof funcao === 'function') {
    console.log(funcao(n1, n2))
  }
}

function somar(a, b) {
  return a + b
}

function subtrair(a, b) {
  return a - b
}

executar(somar, 90, 60)
executar(subtrair, 90, 60)
