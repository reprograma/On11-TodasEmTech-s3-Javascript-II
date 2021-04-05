/* var outNome = prompt("Digite o nome do aluno: ");
    var outNota1 = Number(prompt("Digite a primeira nota: "));
    var outNota2 = Number(prompt("Digite a segunda nota: ")); */ 

    function mediaAluno(nome,nota1,nota2){
        /*if (aluno == "" ||nota1 == "" || nota2 == ""){
            return mediaAluno();
        } */
        
        media = (nota1+nota2)/2;
       
        if ( media >= 7){
            alert( nome + " aprovado,  media: " + media);    
        } else if ( media >= 6 ){
            alert(nome +" de recuperação");
        } else {
            alert(nome + " reprovado, media: " + media);
        }
    }
    mediaAluno("Daniela",8,7);