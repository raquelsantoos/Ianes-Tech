let menuM = document.querySelector('.menuM')
let contentM = document.querySelector('.contentM')

menuM.onclick = function() {
    contentM.classList.toggle('active')
}

function logout() {
  localStorage.setItem('id_login', "")
  const time = setTimeout(abrir, 800)
    function abrir(){
    window.location = '../index.html'
  }
}

function home() {
  const time = setTimeout(abrir, 800)
    function abrir(){
    window.location = './menu.html'
  }
}

function MeuPerfil() {
  let key = localStorage.getItem('id_login')
  if (key == '') {
  } else {
    const time = setTimeout(abrir, 800)
      function abrir(){
      window.location = './perfil.html'
    }
  }
}

function Ajuda() {
    const time = setTimeout(abrir, 800)
      function abrir(){
      window.location = './suporte.html'
    }
  }

let menuP = document.querySelector('.menuP')
let contentP = document.querySelector('.contentP')

menuP.onclick = function() {
    contentP.classList.toggle('active')
}

window.onload = () => {
    let id = localStorage.getItem('id_login')
        
    if (id == '') {
      document.querySelector('.pagCurso1').innerHTML = 'Necessário Login'
      document.querySelector('.pagCurso1').style.background = '#295dd6'
    }

    let dados = localStorage.getItem(id)
    let user = JSON.parse(dados)

    let username = user.nome_
    document.querySelector('.username').innerHTML = username
}

// ------------------------------------------------------
var nav = document.querySelector('.navigation')
var quant = document.querySelectorAll('.slides .imagens')
var atual = 0
var imagem = document.getElementById('atual')
var next = document.getElementById('next')
var voltar = document.getElementById('voltar')
var rolar = true

for (let i = 0; i < quant.length; i++) {
    var sec = document.createElement('sec')
    sec.id = i
    nav.appendChild(sec)
}
document.getElementById('0').classList.add('imgAtual')

function slide() {
    if (atual >= quant.length) {
        atual = 0
    } else if (atual < 0) {
        atual = quant.length - 1
    }
    document.querySelector('.imgAtual').classList.remove('imgAtual')
    imagem.style.marginLeft = -860*atual+'px'
    document.getElementById(atual).classList.add('imgAtual')
}

setInterval(()=>{
    if (rolar) {
        atual++
        slide() 
    } else {
        rolar = true
    }
}, 6000)


function botao(){
  let id = localStorage.getItem('id_login')

  if (id == '') {
    logout()
  } else {
    const time = setTimeout(abrir, 800)
      function abrir(){
        window.location = "./aula1.html"
    }
  }
}