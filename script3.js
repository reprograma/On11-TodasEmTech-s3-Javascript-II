
function calcularMedia(){
    var nomeAluno = prompt("Digite o nome do aluno");
    var nota1 = Number(prompt("Digite a primeira nota:"));
    var nota2 = Number(prompt("Digite a segunda nota:"));
    
    var media = (nota1+nota2)/2;

    if(media > 7){
        alert(nomeAluno + "Aprovado")
    } else{ 
        alert(nomeAluno + "Reprovado")
    }
}

calcularMedia()
