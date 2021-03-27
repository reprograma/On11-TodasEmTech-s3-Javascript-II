function calcularMediaAluno(){
    let nomeAluno = prompt("Insira seu nome: ")
    let nota1 = Number(prompt("Nota em Matemática: "))
    let nota2 = Number(prompt("Nota em Português: "))
    const media = (nota1 + nota2) / 2
    if(nomeAluno == "" || nota1 == "" || nota2 == ""){
        alert("Insira um dado válido!")
        return calcularMediaAluno()
    }
    if(media > 5){
        alert(nomeAluno + ", sua média foi " + media + " e você foi aprovada(o)!")
    }
    if(media == 4){
        alert(nomeAluno + ", sua média foi " + media + " e você foi aprovada(o), mas está em recuperação!")
    }   
    else{
        alert(nomeAluno + ", sua média foi " + media + " e você foi reprovada(o)!")
    }
}
calcularMediaAluno()