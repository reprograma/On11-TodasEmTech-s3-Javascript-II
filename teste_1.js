
//PROGRAMA DE SUBTRAIR NUMEROS

function inSubtracao(){
    var numero1 = Number(prompt("digite seu primeiro numero:"));
    var numero2 = Number(prompt("digite seu segundo numero:"));
    
    var subtracao = numero1-numero2
    
    alert(subtracao);
    }
    
    inSubtracao()
    
    
    
    // EXERCICIO: 
    /* Farmacia JS está em promoção. A cada 2 produtos iguais comprados, receba 5 reais de desconto. Escreva um programa 
    para auxiliar a farmacia a calcular o valor final do produto.*/
    
    var produto1 = prompt("Digite no nome do primeiro produto:")
        var preco1 = Number(prompt("Digite o valor do primeiro produto:"))
        
        var produto2 = prompt("Digite o nome do segundo produto:")
        var preco2 = Number(prompt("Digite o valor do segundo produto:"))
        
        var desconto = 5;
        var valorTotal = preco1 + preco2
    function calcularPromocao() {
    
        //if(produto1 == produto2 && valorTotal > 5)
        if(produto1 == produto2 && preco1 == preco2 && preco1 > 5 && preco2 > 5) {
            var totalPreco = valorTotal - desconto
          alert(`você vai pagar: ${totalPreco} com desconto`)
        } else{
        
         alert(`você vai pagar ${valorTotal} sem desconto`)
        }
      }
    
      calcularPromocao()
    
      //Questão: (SEM PARAMETROS)
    //ETAPA 1 = Elaborar um programa que calcule a média do aluno.
    //ETAPA 2 = Informar se ele foi aprovado(utilizar estrutura condicional)
    //ETAPA 3 = GARANTIR que todos os campos serão preenchidos (Utilizar return)
    
    function calcularMedia (){
        var nomeAluno = prompt("Digite o nome do aluno: ");
        var notaUm = Number(prompt("Digite a primeira nota: ")); 
        var notaDois = Number(prompt("Digite a segunda nota: "));
        var media = ( notaUm + notaDois ) / 2;
        
        if(nomeAluno == "" || notaUm == "" || notaDois == ""){
          return calcularMedia()
        } 
    
        if(media >= 7){
          alert(nomeAluno + "sua média é: " + media + "Você foi aprovado")
        }else if (media>=4){
          alert(nomeAluno + "sua nota é: " + media + "Voc^está em recuperação")
        }else{
          alert(nomeAluno + "Você foi reprovado")
        }
    
    }
    
    calcularMedia()
    
    
    
    //Questão: (UTILIZAR PARAMETRO) 
    //ETAPA 1 = Elaborar um programa que calcule a média do aluno.
    //ETAPA 2 = Informar se ele foi aprovado(utilizar estrutura condicional)
    //ETAPA 3 = GARANTIR que todos os campos serão preenchidos (Utilizar return)
    
        var nomeAluno = prompt("Digite o nome do aluno: ");
        var numeroUm = Number(prompt("Digite a primeira nota: ")); 
        var numeroDois = Number(prompt("Digite a segunda nota: "));
       
       function calcularMediaAluno(nome, notaUm, notaDois){
            if(nome == "" || notaUm == "" || notaDois == ""){
              alert("Por favor, insira o nome e as notas")
    
              return calcularMediaAluno()
            }
            
            var media = ( numeroUm + numeroDois) / 2;
            if(media >= 7){
              alert(nome + " sua media é: " + media + " você foi aprovado")
            
            }else{
              alert(nome + " sua média é: " + media + " voê foi reprovado")
            }
     
          }
       
    
          calcularMediaAluno(nomeAluno,numeroUm,numeroDois)
    
    
          
          // Sem entrada de dados
          function mediaCalcular(nome, nota1, nota2){
             var media = (nota1 + nota2) / 2
    
             if(media >= 7){
               alert(nome + " sua nota é: " + media + " você foi aprovado")
             
             
              }else{
                alert(nome + " sua media é: " + media + " você foi aprovado")
              }
          }
          mediaCalcular("lizz", 7, 9)
    
          
          
          
          //Ajude este supermercado a calcular o desconto dos produtos. A cada 3 itens comprados, o 4º item sai com 50% de desconto.
    
          function promocaoSupermercado() {
          var nomeProduto = prompt("Insira do nome do produto")
          var valorProduro = Number(prompt("Insira o valor do produto"))
    
          var valorFinal = (valorProduro * 3) + (valorProduro / 2)
    
          alert("Promoção de: " + nomeProduto + ". Leve 4 por: R$ " + valorProduro)
    
        }
    
        promocaoSupermercado()
    
    
    
    
        