let num = [5, 8, 2, 9, 3]
num.push(1)
num.sort() // colocar em ordem crescente
console.log(num)
console.log(`O vetor tem ${num.length} posições`)
console.log(`O primeiro valor do vetor é ${num[0]}`)

let pos = num.indexOf(8) // saber qual posição o valor 8 está

// quando js não acha o valor, retorna valor -1 no console
if(pos == -1) {
  console.log('O valor não foi encontrado')
} else {
  console.log(`O valor está na posição ${pos}`)
}