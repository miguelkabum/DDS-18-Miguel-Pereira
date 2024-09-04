// // function mostrarTexto(){
// //     console.log("O texto apareceu")
// // }

// let contagem = 0

// // function mostrarContagem(){
// //     contagem++
// //     console.log(contagem)
// // }
// // setTimeout(mostrarTexto, 1000)

// let interval = setInterval(() => {
//     contagem++
//     console.log(contagem)
//     if (contagem > 5) {
//         clearInterval(interval)
//     }
// }, 1000);

let horas = document.getElementById("horas")
let minutos = document.getElementById("minutos")
let segundos = document.getElementById("segundos")

let dia = document.getElementById("dia")
let mes = document.getElementById("mes")
let ano = document.getElementById("ano")

let saudacao = document.getElementById("saudacao")
let diaSemana =["domingo", "segunda", "terça", "quarta", "quinta", "sexta", "sábado"]

const atualizaRelogio = setInterval(() => {
    let dataAtual = new Date()

    let horaAtual = dataAtual.getHours()
    let minutoAtual = dataAtual.getMinutes()
    let segundoAtual = dataAtual.getSeconds()

    let diaAtual = dataAtual.getDay()
    let mesAtual = dataAtual.getMonth()
    let anoAtual = dataAtual.getFullYear()

    horas.textContent = String(horaAtual).padStart(2, "0")
    minutos.textContent = String(minutoAtual).padStart(2, "0")
    segundos.textContent = String(segundoAtual).padStart(2, "0")

    dia.textContent = String(diaAtual).padStart(2, "0")
    mes.textContent = String(mesAtual).padStart(2, "0")
    ano.textContent = String(anoAtual).padStart(2, "0")

    if(horaAtual < 6){
        saudacao.textContent = `Olá, hoje é ${diaSemana[dataAtual.getDay()]}-feira, dia ${dia.textContent}/${mes.textContent}/${ano.textContent}, tenha uma boa madrugada!`
    }else if(horaAtual < 11){
saudacao.textContent = `Olá, hoje é ${diaSemana[dataAtual.getDay()]}-feira, dia ${dia.textContent}/${mes.textContent}/${ano.textContent}, tenha um bom dia!`
    }else if(horaAtual < 18){
        saudacao.textContent = `Olá, hoje é ${diaSemana[dataAtual.getDay()]}-feira, dia ${dia.textContent}/${mes.textContent}/${ano.textContent}, tenha uma boa tarde!`
    }else{
saudacao.textContent = `Olá, hoje é ${diaSemana[dataAtual.getDay()]}-feira, dia ${dia.textContent}/${mes.textContent}/${ano.textContent}, tenha uma boa noite!`
    }
}, 1000);


