const imgUm = document.querySelector('.zero')
const imgDois = document.querySelector('.um')
const imgTres = document.querySelector('.dois')
let i = 1
let setTimeOut

function parar(){
    imgUm.classList.remove("hide")
    imgDois.classList.add("hide")
    imgTres.classList.add("hide")
    clearTimeout(setTimeOut)
}
parar()
function passoUm(){
    imgUm.classList.add("hide")
    imgTres.classList.add("hide")
    imgDois.classList.remove("hide")

}
function passoDois(){
    imgDois.classList.add("hide")
    imgUm.classList.add("hide")
    imgTres.classList.remove("hide")
}

function andar(){
    setTimeOut = setTimeout(() => {
        
        if(i == 1){
            passoUm()
            console.log("entrou em dois")
            i++
        }else if(i == 2){
            passoDois()
            console.log("entrou em tres")
            i = 1
        }
        andar()
    }, 500);  
 
}
