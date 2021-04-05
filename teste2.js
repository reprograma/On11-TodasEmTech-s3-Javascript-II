function confirmarChave(){
    var chave = Number(prompt("Insira o número correto da chave: "));
    if (chave == 1){
        alert("Chave correta");
        } else {
            return confirmarChave();
                }
    
    }
    
    confirmarChave();