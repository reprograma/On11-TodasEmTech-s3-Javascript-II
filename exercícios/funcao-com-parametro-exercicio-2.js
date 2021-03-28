function calcularMediaAluno(nomeAluno, nota1, nota2){
    const media = (nota1 + nota2) / 2
    if (nomeAluno == "" || nota1 == "" || nota2 == ""){
        alert("Insira um dado válido!")
        return
    }
    if(media > 5){
        alert(`${nomeAluno} , sua média foi ${media} e você foi aprovada(o)!`)
    }
    if(media == 4){
        alert(`${nomeAluno} , sua média foi ${media} e você foi aprovada(o), mas está em recuperação!`)
    }   
    if(media < 4){
        alert(`${nomeAluno} , sua média foi ${media} e você foi reprovada(o)!`)
    }
}
calcularMediaAluno("Helena", 7, 7)