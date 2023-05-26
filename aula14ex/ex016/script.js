function contar() {
  let ini = document.getElementById('txti')
  let fim = document.getElementById('txtf')
  let passo = document.getElementById('txtp')
  let res = document.getElementById('res')

  if (ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
    // window.alert('ERRO: Faltam dados')
    res.innerHTML = 'Impossível contar'
  } else {
      // alert('Tudo ok')
      res.innerHTML = 'Contando: <br>'
      // converter valores dentro de ini, fim e passo para numero:
      let i = Number(ini.value)
      let f = Number(fim.value)
      let p = Number(passo.value)
      if (p <= 0) {
        window.alert("Passo inválido. Alterado para passo = 1")
        p = 1
      }
      if (i < f) {
      // Contagem crescente
        for (let c = i; c <= f; c = c + p) {
        // contador começa em inicio, enquanto for menor ou igual a fim, soma contador mais passo
          res.innerHTML += `${c} \u{1F449}`
        }      
      } else {
      // Contagem regressiva
          for(let c = i; c >= f; c = c - p) {
              res.innerHTML += `${c} \u{1F449}`
          }
        }
      res.innerHTML += `\u{1F3C1}`
    }
}