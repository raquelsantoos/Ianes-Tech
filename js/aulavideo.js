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










var aula1 = ["https://www.youtube.com/embed/8dPpZsC6Vg8"]
var aula2 = ["https://www.youtube.com/embed/62dYzVao-yk"]
var aula3 = ["https://www.youtube.com/embed/7pqp3IKyC0s"]
var aula4 = ["https://www.youtube.com/embed/l-KFuLiM3kY"]
var aula5 = ["https://www.youtube.com/embed/JlE0pzESf5g"]
var aula6 = ["https://www.youtube.com/embed/ZCxNUKR6UI4"]
var aula7 = ["https://www.youtube.com/embed/byqhpuVpvEI"]
var aula8 = ["https://www.youtube.com/embed/fzyab4P2pn8"]

function changeSrc(aula){
    if(aula == "aula1"){
        document.getElementById("aula").src = aula1[0];


    }else if(aula == "aula2"){
        document.getElementById("aula").src = aula2[0];


    }else if(aula == "aula3"){
        document.getElementById("aula").src = aula3[0];

        
    }else if(aula == "aula4"){
        document.getElementById("aula").src = aula4[0];


    }else if(aula == "aula5"){
        document.getElementById("aula").src = aula5[0];


    }else if(aula == "aula6"){
        document.getElementById("aula").src = aula6[0];


    }else if(aula == "aula7"){
        document.getElementById("aula").src = aula7[0];


    }else if(aula == "aula8"){
        document.getElementById("aula").src = aula8[0];

    }
}