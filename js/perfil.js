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
    document.querySelector('.user').innerHTML = username
    document.querySelector('._nome').value = username

    let email = user.email_
    document.querySelector('._email').value = email

    let cpf = user.cpf_
    document.querySelector('._cpf').value = cpf

    let tel = user.tel_
    document.querySelector('._telefone').value = tel

    let senha = user.senha_
    document.querySelector('._senha').value = senha
}

function resetDados() {
  document.getElementById('_nome').style.border = ""
  document.getElementById('_senha').style.border = ""
  document.getElementById('conf_senha').style.border = ""
  document.getElementById('_telefone').style.border = ""
  document.getElementById('_email').style.border = ""
  document.getElementById('_cpf').style.border = ""

  let id = localStorage.getItem('id_login')
    let dados = localStorage.getItem(id)
    let user = JSON.parse(dados)

    let username = user.nome_
    document.querySelector('._nome').value = username

    let email = user.email_
    document.querySelector('._email').value = email

    let cpf = user.cpf_
    document.querySelector('._cpf').value = cpf

    let tel = user.tel_
    document.querySelector('._telefone').value = tel

    let senha = user.senha_
    document.querySelector('._senha').value = senha
}

function salvarDados() {

  let key = localStorage.getItem('id_login')

  let dados = localStorage.getItem(key)
  let user = JSON.parse(dados)
  var senha1 = user.senha_
  var email1 = user.email_
  var cpf1 = user.cpf_

  var nome = document.getElementById("_nome").value
  var email = document.getElementById("_email").value
  if (email == email1) {
    document.getElementById('_email').style.border = "1px solid #15c22c"
  } else {
    if (validEmail()) {
      retorno = 1
    }
  }
  var telefone = document.getElementById("_telefone").value
  var cpf = document.getElementById("_cpf").value
  if (cpf == cpf1) {
    document.getElementById('_cpf').style.border = "1px solid #15c22c"
  } else {
    if (validCPF()) {
      retorno = 1
    }
  }
  var senha = document.getElementById("_senha").value
  var conf_senha = document.getElementById("conf_senha").value

  var retorno = 0

  if (nome.length < 3) {
    document.getElementById('_nome').style.border = "1px solid #e80c0c"
    retorno++
  } else {
    document.getElementById('_nome').style.border = "1px solid #15c22c"
  }
  if (senha.length < 4) {
    document.getElementById('_senha').style.border = "1px solid #e80c0c"
    retorno++
  } else {
    document.getElementById('_senha').style.border = "1px solid #15c22c"
  }
  if (senha != senha1) {
    if ((senha != conf_senha) || (conf_senha.length < 4)) {
      document.getElementById('conf_senha').style.border = "1px solid #e80c0c"
      retorno++
    } else {
      document.getElementById('conf_senha').style.border = "1px solid #15c22c"
    }
  } else {
    document.getElementById('conf_senha').style.border = "1px solid #15c22c"
  }
  if (telefone.length < 15) {
    document.getElementById('_telefone').style.border = "1px solid #e80c0c"
    retorno++
  } else {
    document.getElementById('_telefone').style.border = "1px solid #15c22c"
  }
  if (retorno > 0) {
    return
  }
  
  var usuario = {
              nome_ : nome,
              email_ : email,
              tel_ : telefone,
              cpf_ : cpf,
              senha_ : senha
              };
  
  // Armazenar os dados no Local Storage do Navegador
  localStorage.setItem(key, JSON.stringify(usuario))
}

function validEmail() {
  var email = document.getElementById("_email").value

  if (email.length < 7) {
    document.getElementById('_email').style.border = "1px solid #e80c0c"
    return true
  } else {
    document.getElementById('_email').style.border = "1px solid #15c22c"
  }

  for (let i = 0; i < localStorage.length; i++) {
    let id = localStorage.key(i)
    let dados = localStorage.getItem(id)
    let user
    try {
      user = JSON.parse(dados)
    } catch(e) {
      user = ""
    }

    if (email == user.email_) {
      document.getElementById('_email').style.border = "1px solid #e80c0c"
      return true
    }
  }
  return false
}

function validCPF() {
  var cpf = document.getElementById("_cpf").value

  if (cpf.length < 14) {
    document.getElementById('_cpf').style.border = "1px solid #e80c0c"
    return true
  } else {
    document.getElementById('_cpf').style.border = "1px solid #15c22c"
  }
  
  for (let i = 0; i < localStorage.length; i++) {
    let id = localStorage.key(i)
    let dados = localStorage.getItem(id)
    let user
    try {
      user = JSON.parse(dados)
    } catch(e) {
      user = ""
    }

    if (cpf == user.cpf_) {
      document.getElementById('_cpf').style.border = "1px solid #e80c0c"
      return true
    }
  }
  return false
}