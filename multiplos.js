

var number = Number(prompt("Insira o número que você quer saber os múltiplos "))

function mult() {
    
    for (i = 1; i <= 100; i++) {

        let multiplos = i * number;
        
        document.write(`Os múltiplos de ${number} são: ${multiplos} <br> `)

    }

}
mult()