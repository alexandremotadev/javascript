function tabuada() {
    let num = document.getElementById('txtn')
    let tab = document.getElementById('seltab')
    if (num.value.length == 0) {
      window.alert("Digite um número")      
    } else {
      let n = Number(num.value)
      let c = 1
      tab.innerHTML = '' // limpar area de tabuada, antes de mostrar a proxima
      while (c <= 10) {
        let item = document.createElement('option')
        item.text = `${n} x ${c} = ${n*c}`
        item.value = `tab${c}` // util em outras linguagens, saber qual item foi selecionado na lista
        tab.appendChild(item) // incluir tabuada, que é elemento filho, dentro do selection 
        c++
      }
    }
    
}