//Questão: 
//ETAPA 1 = Elaborar um programa que calcule a média do aluno.
//ETAPA 2 = Informar se ele foi aprovado(utilizar estrutura condicional)
//ETAPA 3 = GARANTIR que todos os campos serão preenchidos (Utilizar return)

function mediaAlunos () {

var nomeAluno = prompt("Qual seu NOME querido aluninho?");
var nota1 = Number(prompt("Qual foi sua nota do trabalho?"));
var nota2 = Number(prompt ("Qual foi sua nota na prova?"));

var mediaFinal = (nota1 + nota2) / 2;


if (nomeAluno == "" || nota1 == "" || nota2 == "" ) {
    return mediaAlunos ()
    
}

if (mediaFinal >= 5){
alert(nomeAluno + " sua média é " + mediaFinal + " e você está APROVADX");

} 
else if (mediaFinal == 4){
alert(nomeAluno + " sua média é " + mediaFinal + " e você está de RECUPERAÇÃO");

}
else {
alert(nomeAluno + " sua média é " + mediaFinal + " e você está REPROVADX");

}
}
mediaAlunos ()