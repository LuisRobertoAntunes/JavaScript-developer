/* Data 
Atributo : dia mes ano
Metodo : Exibir -> "Dia/mes/ano"
*/

const nascimento = {
  dia: 4,
  mes: 10,
  ano: 2010,
  exibir: function () {
    return `${this.dia}/${this.mes}/${this.ano}`
  }
}

console.log(nascimento.exibir())
