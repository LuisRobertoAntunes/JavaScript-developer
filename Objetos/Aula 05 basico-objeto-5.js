const cliente = {
  codigo: 44855,
  nome: 'Ana',
  vip: true,
  endereco: {
    logradouro: '  Rua ABC',
    numero: 123,
    complemento: 'Apto 101 Bloco B'
  },
  nomeFilhos: ['Bia', 'Carlos', 'Gabriel']
}

console.log(cliente['endereco']['logradouro'])
console.log(cliente.endereco.logradouro)
