function sempreRetornaUm() {
  return 1
}

function textoOuNumero(retornaTexto) {
  return retornaTexto ? "Sou um Texto!" : 123
  
  /*if (retornaTexto) {
    return 'Sou um Texto!'
  } else {
    return 123
  }*/
  
}

let valor = sempreRetornaUm()
console.log(valor)

let resultado = textoOuNumero(true)
console.log(resultado)

console.log(textoOuNumero(false))