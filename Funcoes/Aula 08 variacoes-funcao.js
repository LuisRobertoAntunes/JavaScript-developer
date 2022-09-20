//#1: Função COM Parâmetros COM Retorno

function somar(a, b) {
  return a + b
}

let resultado = somar(30, 56)
console.log(resultado)

//#2: Função COM Parâmetros eSEM Retorno

function exibirMultiplicacao(a, b) {
  console.log(a * b)
}
exibirMultiplicacao(10, 21)

//#3: Função Sem Parâmetro e COM Retorno

function retornarDataAtual() {
  return new Date()
}

console.log(retornarDataAtual())

//#4: Função SEM Parâmetro e SEM Retorno

function exibirHoraAtual(){
  console.log(new Date().getHours())
}
exibirHoraAtual()