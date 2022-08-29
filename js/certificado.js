// ----------------------------- Gerador PDF () ------------------------------------------

function downloadPDF() {
    const item = document.querySelector('.content')

    var opt = {
        margin:       0.3,
        filename:     'certificadoIANES.pdf',
        html2canvas:  { scale: 2 },
        jsPDF:        { unit: 'in', format: 'letter', orientation: 'landscape' }
      }

    html2pdf().set(opt).from(item).save()
}

// ----------------------------- Gerador PDF () - Final ----------------------------------


window.onload = () => {
  let id = localStorage.getItem('id_login')
  let dados = localStorage.getItem(id)
  let user = JSON.parse(dados)

  let nome = user.nome_
  let cpf = user.cpf_
  document.querySelector('.nome').innerHTML = nome
  document.querySelector('.cpf').innerHTML = cpf

  downloadPDF()

  const time = setTimeout(abrir, 200)
    function abrir(){
        window.location = './menu.html'
    }
}