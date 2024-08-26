/*let dog = {
    nome: "Mel",
    raca: "Poodle",
    latir: function(){
        console.log("au au")
    },
    andar: function(){
        console.log("Andando")
    }
}

//dog.andar()

let alune = {
    nome: "Cris Brown",
    notas: [7, 2, 10],
    media: function(n1, n2, n3){
        return ((n1 + n2 + n3) / 3)
    }
} 
//console.log(alune.media(alune.notas[0], alune.notas[1], alune.notas[2]))

function calcularMedia (n1, n2){
    return((n1 + n2) / 2)
}

let alune1 = {
    nome: "Messi",
    notas: [6, 2],
    media: calcularMedia
} 
let alune2 = {
    nome: "Ronaldo",
    notas: [7, 9],
    media: calcularMedia
} 

//console.log(alune2.media(alune2.notas[0], alune2.notas[1]))
//console.log(alune1.media(alune1.notas[0], alune1.notas[1]))

let aluno = {
    nome: "Neymar",
    notas: [100, 11],
    media: function(){
        return ((this.notas[0] + this.notas[1]) / 2)
    }
}


*/
media: function calcularMedia(){
    return ((this.notas[0] + this.notas[1]) / 2)
}

let alune1 = {
    nome: "Messi",
    notas: [6, 2],
    media: calcularMedia
} 
let alune2 = {
    nome: "Ronaldo",
    notas: [7, 9],
    media: calcularMedia
} 