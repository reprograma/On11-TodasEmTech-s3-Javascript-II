/* EXEMPLO SEM PARÂMETRO
function mediaAluno(){
    var nomeAluno = prompt('Por favor, digite seu nome:')
    var nota1 = Number(prompt('Agora digite a sua primeira nota:'))
    var nota2 = Number(prompt('Por último, sua segunda nota:'))

    var media = (nota1 + nota2) / 2
    
    if (nomeAluno == '' || nota1 == '' || nota2 == ''){
        return mediaAluno()
    }
    
    if (media >= 5){
        alert('A aluna ' + nomeAluno + ' foi aprovada com a média ' + media)
    }else if(media == 4){
        alert('Ei ' + nomeAluno + ' você ficou de recuperação, porque sua média é ' + media)
    }else{
        alert('Que pena ' + nomeAluno + ', você foi reprovada com média ' + media)
    }
}
mediaAluno()*/
//---------------------------------------------------------------------------------------------------------
// EXEMPLO COM PARÂMETRO
var nomeAluno = prompt('Por favor, digite seu nome:')
var primeiraNota = Number(prompt('Digite agora a sua primeira nota:'))
var segundaNota = Number(prompt('Por último, sua segunda nota:'))

function mediaAluno(nome, nota1, nota2){
    /*if (nome == '' || nota1 == '' || nota2 == ''){  
        return mediaAluno(nome, nota1, nota2)
    }*/
    var media = (nota1 + nota2) / 2

    if (media >= 5){
        alert('A aluna ' + nome + ' foi aprovada com a média ' + media)
    }else if(media == 4){
        alert('Ei ' + nome + ' você ficou de recuperação, porque sua média é ' + media)
    }else{
        alert('Que pena ' + nome + ', você foi reprovada com média ' + media)
    }
}

mediaAluno(nomeAluno, primeiraNota, segundaNota)
