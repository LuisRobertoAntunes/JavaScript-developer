const a = 8
const b = 4
const operacao = '' // + - * /

resultado =
  operacao == '+'
    ? 8 + 4
    : operacao == '-'
    ? 8 - 4
    : operacao == '*'
    ? 8 * 4
    : operacao == '/'
    ? 8 / 4
    :'Operação INVALIDA!'
console.log(resultado)