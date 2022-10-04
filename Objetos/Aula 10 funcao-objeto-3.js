// Função Construtora (Classe) -> Objeto
function data(dia = 1, mes = 1, ano = 2021) {
  this.dia = dia
  this.mes = mes
  this.ano = ano

  this.exibir = function () {
    return `${this.dia}/${this.mes}/${this.ano}`
  }
}
 
const d1 = new data()
const d2 = new data(24, 12, 2022)

console.log(d1)
console.log(d2)

console.log(d1.exibir())
console.log(d2.exibir())
