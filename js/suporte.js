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

function contato() {
  const time = setTimeout(abrir, 800)
    function abrir(){
    window.location = './menu.html#Contato/QuemSomos'
  }
}

function cursos() {
  const time = setTimeout(abrir, 800)
    function abrir(){
    window.location = './menu.html#MeusCursos'
  }
}

function MeuPerfil() {
  const time = setTimeout(abrir, 800)
    function abrir(){
    window.location = './perfil.html'
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
    let dados = localStorage.getItem(id)
    let user = JSON.parse(dados)

    let username = user.nome_
    document.querySelector('.username').innerHTML = username
}