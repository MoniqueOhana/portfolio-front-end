let nome = window.document.getElementById('nome');
let email = window.document.querySelector('#email');
let assunto = window.document.querySelector('#assunto');
let mensagem = window.document.querySelector('#mensagem');

nome.style.width = '90%'
email.style.width = '90%'
assunto.style.width = '90%'
mensagem.style.width = '90%'

function validaNome () {
    let txt = document.querySelector('txtNome')
    if (nome.value.length < 3) {
        txt.innerHTML = 'Nome inválido'
        txt.style.color = 'red';
    } else {
        txt.innerHTML = 'Nome válido'
        txt.style.color = 'green';
    }
}
