
function logar(){
    let login = document.getElementById("inputUsuario").value
    let senha = document.getElementById("inputSenha").value

    if(login == "a" && senha == "a"){
        window.location.href = "home.html"
        console.log("qwe")
    } else {
        console.log("errado")
    }
}

function cadastro(){
    let usuario = document.getElementById("inputNomeUsuario").value
    let email = document.getElementById("inputUsuarioCad").value
    let senha = document.getElementById("inputSenhacad").value
    let confimarSenha = document.getElementById("inputConfSenhacad").value

    let emailCerto = emailValido(email)

    if (emailCerto) {
        if(senah === senhaConfirma){
            location.href = "index.html"
            alert("Olá, " + usuario + ", senha bem vindo!")
        }else{
            alert("As senhas não coincidem")
        }
    } else {
        email.include("@")
    }

}