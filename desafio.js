// desafio 1

var permitido = Number(prompt('Digite a velocidade permitida:'))
var condutor = Number(prompt('Digite a velocidade do condutor:'))

function multa(permitido, condutor){
    if (condutor > permitido && condutor <= permitido*1.1){
        alert("Multa leve")
    } else if (condutor > permitido*1.1){
        alert("Multa grave")
    } else{
        alert("Sem multa")
    }
}

multa(permitido, condutor)


//desafio 2

let num = prompt("insira um numero para você encontrar seus multiplos")

for (var i = 1; i <= 100; i++){ 
    if(i % num == 0){
        document.write(i + "-") 
    }
}