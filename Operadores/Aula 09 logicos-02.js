const t1 = false
const t2 = false

let comprarTV50 = t1 && t2 //AND
console.log('Vamos comprar a TV 50"?', comprarTV50)

comprarTV32 = t1 !== t2 //XOR
console.log('Vamos comprar a TV 32"?', comprarTV32)

let tomarSoverte = t1 || t2 //OR
console.log('Vamos comprar soverte?', tomarSoverte)

let ficarEmCasa = !tomarSoverte //NOT
console.log('Vamos ficar em casa?', ficarEmCasa)
