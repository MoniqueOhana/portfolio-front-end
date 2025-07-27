let nome = window.document.getElementById('nome');
let email = window.document.querySelector('#email');
let assunto = window.document.querySelector('#assunto');
let mensagem = window.document.querySelector('#mensagem');

let nomeOk = false;
let emailOk = false;
let assuntoOk = false;
let mensagemOk = false;

nome.style.width = '90%'
email.style.width = '90%'
assunto.style.width = '90%'
mensagem.style.width = '90%'

function validaNome () {
    let txt = document.querySelector('#txtNome')
    if (nome.value.length < 3) {
        txt.innerHTML = 'Nome inválido'
        txt.style.color = 'red';
    } else {
        txt.innerHTML = 'Nome válido'
        txt.style.color = 'green'
        nomeOk = true;
    }
}

function validaEmail () {
    let txt = document.querySelector('#txtEmail')
    if (email.value.indexOf('@') == -1 || email.value.indexOf('.') == -1) {
        txt.innerHTML = "Email inválido!"
        txt.style.color = 'red'
    }
    else {
        txt.innerHTML = 'Email Válido'
        txt.style.color = 'green'
        emailOk = true;

    }
}

function validaAssunto() {
    let txtAssunto = document.querySelector('#txtAssunto')

    if(assunto.value.length >= 100) {
        txtAssunto.innerHTML = 'Não exceda 100 caractéres nesse campo.'
        txtAssunto.style.color = 'red';
        assuntoOk = false;
    } else {
        txtAssunto.innerHTML = 'Assunto válido';
        txtAssunto.style.color = 'green'
        assuntoOk = true;
    }

}

function validaMensagem () {
    let txtMensagem = document.querySelector('#txtMensagem')

    if(mensagem.value.length <= 25) {
        txtMensagem.innerHTML = 'A mensagem deverá ter no mínimo 25 caractéres.'
        txtMensagem.style.color = 'red'
        mensagemOk = false;
    } else {
        txtMensagem.innerHTML = 'Mensagem válida';
        txtMensagem.style.color = 'green'
        mensagemOk = true;
    }
}

function enviar () {
    if (nomeOk == true && emailOk == true && assuntoOk == true && mensagemOk == true) {
        alert('Formulário enviado com sucesso!')
} else {
    alert('Preencha o formulário corretamente.')
}
}

function mapaZoom() {
    mapa.style.width = '800px'
    mapa.style.heigth = '600px'

}

function mapaNormal() {
    mapa.style.width = '600px'
    mapa.style.heigth = '450px'
}