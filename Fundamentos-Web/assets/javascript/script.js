/*
por nome:  getElementsByName();
por Id:    getElementById();
por Tag:   getElemetByTagName();
por class: getElementsByClassName();
por seletor: querySelector(); seletor pelo CSS
*/

let nome = window.document.getElementById("nome")
let email = document.querySelector("#email")
let assunto = document.querySelector("#assunto")
let nomeOk = false
let emailOk = false
let assuntoOk = false
let mapa = document.querySelector("#mapa")

nome.style.width = '100%'
email.style.width = '100%'

function validaNome(){
    let txtNome = document.querySelector('#textNome')
    if(nome.value.length < 3){
        txtNome.innerHTML = 'Nome Invalido'
        txtNome.style.color = "red"
        txtNome.style.display = 'block'
    }else{
        txtNome.style.display = 'none'
        nomeOk = true
    }
}

function validaEmail(){
    let txtEmail = document.querySelector("#textEmail")

    if(email.value.indexOf('@') == -1 || email.value.indexOf('.') == -1){
        txtEmail.innerHTML = "Email Invalido"
        txtEmail.style.color = "red"
        txtEmail.style.display = 'block'
    }else{
        txtEmail.style.display = 'none'
        emailOk = true
    }
}

function validaassunto(){
    let txtAssunto = document.querySelector("#textAssunto")

    if (assunto.value.length >= 100) {
        txtAssunto.innerHTML = "Texto é muito grande, digite no maximo 100 caracteres"
        txtAssunto.style.color = "red"
        txtAssunto.style.display = 'block'
    }else{
        txtAssunto.style.display = 'none'
        assuntoOk = true
    }
}

function enviar(){
    if (nomeOk == true && emailOk == true && assuntoOk == true) {
        alert("Formulario enviado com Sucesso")
    }else{
        alert("Preencha o formulario antes de enviar...")
    }
}

function mapaZoom(){
    mapa.style.width = '800px'
    mapa.style.height = '600px'
}

function mapaNormal(){
    mapa.style.width = '400px'
    mapa.style.height = '250px'
}