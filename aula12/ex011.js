// Condição aninhada

var idade = 25

if (idade < 16) {
  console.log('Não vota')  
} else if (idade >= 16 && idade < 18 || idade > 65){  // && = e , || = ou
  console.log('Voto opcional')  
} else if (idade >= 18){
  console.log('Voto obrigatório')
}

// opção mais compacta:
var idade = 15

if (idade < 16) {
  console.log('Não vota')  
} else if (idade < 18 || idade > 65){  // && = e , || = ou
  console.log('Voto opcional')  
} else {
  console.log('Voto obrigatório')
}