function verificar(){
  //window.alert('FUNCIONOU')
  var data = new Date()
  var ano = data.getFullYear()
  var fano = document.getElementById('txtano')
  var res = document.getElementById('res')
  if (fano.value.length == 0 || Number(fano.value) > ano) {
    // se usuario nao digitou ano, ou se ano digitado for maior que ano atual 
    window.alert('Erro - Verifique os dados')    
  } else {
    var fsex = document.getElementsByName('radsex')
    var idade = ano - Number(fano.value) // ano atual - valor digitado em fano
    var genero = ''
    // inserir img sem ter a tag <img> criada no HTML
    var img = document.createElement('img')
    img.setAttribute('id','foto')
   
    if (fsex[0].checked) {
      genero = 'Homem'
      if (idade >= 0 && idade < 18) {
        // Criança
        img.setAttribute('src','bebe-m.jpg')
      } else if (idade >=18 && idade < 60) {
        // Adulto
        img.setAttribute('src','jovem-m.jpg')
      } else {
        // Idoso
        img.setAttribute('src','idoso-m.jpg')
      }
    } else if (fsex[1].checked){
      genero = 'Mulher'
      if (idade >= 0 && idade < 18) {
        // Criança
        img.setAttribute('src','bebe-f.jpg')
      } else if (idade >=18 && idade < 60) {
        // Adulto
        img.setAttribute('src','jovem-f.jpg')
      } else {
        // Idoso
        img.setAttribute('src','idoso-f.jpg')
      }

      }

    res.style.textAlign = 'center'
    res.innerHTML = `Detectamos ${genero} com ${idade} anos`
    res.appendChild(img)

    }
    
}


