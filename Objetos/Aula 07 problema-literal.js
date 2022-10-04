const d1 = {
  dia: 28,
  mes: 2,
  ano: 2009,
  exibir: function () {
    return `${this.dia}/${this.mes}/${this.ano}`
  }
}
const d2 = {
  dia: 5,
  mes: 6,
  ano: 2010,
  exibir: function () {
    return `${this.dia}/${this.mes}/${this.ano}`
  }
}

const d3 = {
  dia: 24,
  mes: 8,
  ano: 2015,
  exibir: function () {
    return `${this.dia}/${this.mes}/${this.ano}`
  }
}

console.log(d1.exibir())
console.log(d2.exibir())
console.log(d3.exibir())
