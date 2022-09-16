/*
A+  ->  10
A   ->  9
B+  ->  8
B   ->  7
C+  ->  6
C   ->  5
D+  ->  4
D   ->  3
E+  ->  2
E   ->  1
F   ->  0
*/

const nota = 5

switch(Math.floor(nota)){
  case 10 : 
    console.log("Parabéns sua nota foi A+ APROVADÍSSIMO")
    break
  case 9 :
    console.log("Parabéns sua nota foi A APROVADO")
    break
  case 8 :
    console.log("Parabéns sua nota foi B+ APROVADO")
    break
  case 7 :
    console.log("Parabéns sua nota foi B APROVADO")
    break
  case 6 :
    console.log("Foi por pouco mas infelizmente foi C+ RECUPERAÇÃO")
    break
  case 5 :
    console.log("Foi por pouco mas infelizmente sua nota foi C RECUPERAÇÃO")
    break
  case 4 :
    console.log("Infelizmente sua nota foi D+ REPROVADO")
    break
  case 3 :
    console.log("Infelizmente sua nota foi D REPROVADO")
    break
  case 2 :
    console.log("Infelizmente sua nota foi E+ REPROVADO")
    break
  case 1 :
    console.log("Infelizmente sua nota foi E REPROVADO")
    break
  case 0 :
    console.log("Infelizmente sua nota foi F MUITO REPROVADO")
    break
  default :
  console.log("Nota invalida")
    

} 