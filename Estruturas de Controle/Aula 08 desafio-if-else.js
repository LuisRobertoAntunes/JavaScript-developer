const a = 10
const b = 28
const operacao = "%" // + - * / %

if (operacao == '+') {
  console.log(a + b)
} else if (operacao == '-') {
  console.log(a - b)
} else if (operacao == '*') {
  console.log(a * b)
} else if (operacao == '/') {
  console.log(a / b)
} else if (operacao == '%') {
  console.log(a % b)
} else {
  console.log('Operação Inválida!')
}
