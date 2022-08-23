let preco = 19.90
let desconto = 0.4


//Valor literal!!!
console.log(19.9 * 0.6) 

//Usando variaveis!!
console.log(preco * (1 - desconto))

let precoComDesconto = preco * (1 - desconto)
console.log(precoComDesconto)

let nome = "Caderno" //String (Texto) -> sequencia de símbolos
let categoria = "Papelaria"

//Template String
console.log(`Produto: ${nome}, Categoria: ${categoria}, Preço: ${preco}, Desconto: ${desconto}`) 

console.log(1 + 1)
console.log("1" + "1")