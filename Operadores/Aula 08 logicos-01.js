let temDinheiro = true
let estaEnsolarado = false
let carroNaGaragem = true

let resultadoE = '#1 (AND) - Vai pro Shopping? '
resultadoE += temDinheiro && estaEnsolarado
console.log(resultadoE)

let resultadoOU = '#2 (OR) - Vai pro Shopping? '
resultadoOU += estaEnsolarado || carroNaGaragem
console.log(resultadoOU)
