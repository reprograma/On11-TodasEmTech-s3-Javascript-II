//Questão: (UTILIZAR PARAMETRO) 
//ETAPA 1 = Elaborar um programa que calcule a média do aluno.
//ETAPA 2 = Informar se ele foi aprovado(utilizar estrutura condicional)
//ETAPA 3 = GARANTIR que todos os campos serão preenchidos (Utilizar return)



function verificarDados(){
    let nm = prompt("Insira seu nome")
    let n1 = Number(prompt("Insira a primeira nota"))
    let n2 = Number(prompt("Insira a segunda nota"))
    let n3 = Number(prompt("Insira a terceira nota"))

if (nm == "" || n1 == "" || n2 == "" || n3 == ""){
    alert("Insira seu nome e as notas")
return verificarDados()} 
else{
    function calcularMedia(nome,nota1,nota2,nota3){

    let media = ((nota1+nota2+nota3)/3).toFixed(2)
        if (media >= 7){
        alert(`Parabéns ${nome}, você foi aprovado! Sua média é ${media}`)
    }
        else if (media >=5){
        alert(`${nome}, você está de recuperação. Sua média é ${media}`)
    }
        else {
        alert(`${nome}, você foi reprovado. Sua média é ${media}`)
    }
}
}
calcularMedia(nm,n1,n2,n3)
}



verificarDados()

