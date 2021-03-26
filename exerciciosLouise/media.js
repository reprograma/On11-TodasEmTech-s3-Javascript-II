function mediaAluno(){
var nome = prompt("Insira o seu nome aqui: ");
if(nome == ""){
    alert("Por favor, insira o nome.")
    return mediaAluno()
}
var provaUm = Number(prompt("Insira a nota da primeira prova!^^:" ));
if(provaUm == ""){
    alert("Insira a primeira nota, por favor.")
    return mediaAluno()
}else if(provaUm >= 11){
    alert("Numero invalido.")
    return mediaAluno()
}
var provaDois = Number(prompt("Insira a nota da segunda prova!^^" ));
if(provaDois == ""){
    alert("Insira a segunda nota, por favor.")
    return mediaAluno()
}else if(provaDois >= 11){
    alert("Numero invalido.")
    return mediaAluno()
}

var media = ([provaUm + provaDois]/2);
if(media >= 6){
    alert(`${nome}, sua média é ${media} e você foi aprovade!`)
}else{
    alert(`${nome}, sua média é ${media} e você foi reprovade.`)
}

}
mediaAluno()