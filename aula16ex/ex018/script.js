let num = document.querySelector('input#fnum')
let lista = document.querySelector('select#flista')
let res = document.querySelector('div#res')
let valores = []

function isNumero(n) {
    // se número digitado for entre 1 e 100 retornar verdadeiro ( não escreve nada na tela)
    if(Number(n) >= 1 && Number(n) <= 100) {
      return true
    } else {
      return false
    }
}

function inLista(n, l) {
// n e l é porque vai receber 1 numero e 1 lista
// -1 significa se o número não for encontrado na lista
    if (l.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }
}

function adicionar() {
  // adicionar ao select se digitei um numero e se o número digitado não estiver em lista ( ! = não )
    if(isNumero(num.value) && !inLista(num.value, valores)) {
      // push = adicionar elemento no vetor
      valores.push(Number(num.value)) // adicionar number que está dentro do num.value

      // adicionar numero digitado na barra no select
      let item = document.createElement('option')
      item.text = `Valor ${num.value} adicionado.`
      lista.appendChild(item)
      res.innerHTML = '' // quando adicionar elemento, tem que limpar o resultado mostrado na segunda div
} else {
    window.alert('Valor inválido ou já encontrado na lista')
}
    // quando clicar em adicionar valor, comandos abaixo apagam da barra do adicionar o valor que digitei
    num.value = ''
    num.focus()
}

function finalizar() {
  if (valores.length == 0) {
    window.alert('Adicione valores antes de finalizar')
  } else {
    let tot = valores.length // total de valores
    let maior = valores [0] // analisar maior valor - começa com o maior e menor valor sendo o primeiro digitado
    let menor = valores [0]
    let soma = 0
    let media = 0
    
    // o for abaixo analise cada numero pra saber qual o menor e qual o maior, varre o vetor inteiro
    for(let pos in valores) {
      soma += valores[pos] // soma começa em zero e vai somando todos os valores
      if (valores[pos] > maior)
        maior = valores [pos]
      if (valores[pos] < menor)
        menor = valores [pos]
    }

    /* 

    Outra forma de achar maior e menor numero do array:
    var maior_numero = Math.max.apply(null, numeros); // Obtém o maior número do array numeros
        
    var menor_numero = Math.min.apply(null, numeros); // Obtém o menor número do array numeros
    */
    media = soma / tot
    res.innerHTML = '' // zerar valor de res
    res.innerHTML += `<p> Ao todo temos ${tot} números cadastrados.</p>`
    res.innerHTML += `<p> O maior valor informado foi ${maior}.</p>`
    res.innerHTML += `<p> O menor valor informado foi ${menor}.</p>`
    res.innerHTML += `<p> Somando todos os valores, temos ${soma}.</p>`
    res.innerHTML += `<p> A média dos valores é ${media}.</p>`
}
}