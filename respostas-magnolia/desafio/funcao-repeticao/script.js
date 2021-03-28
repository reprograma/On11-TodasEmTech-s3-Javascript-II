/**
 * 
 * Desafio Função e Repetição:
 * Crie um programa que verifique o valor inserido pelo usuário e imprima seus múltiplos (MAX 100 números)
 * 
 **/

function multiplos() {

    let numero = Number(prompt('Informe um número'))

    for (let i = 1; i <= 100; i++) {
        
        resultado = numero * i

        if (resultado <= 100) {
            alert(resultado)
        }
    }
}
multiplos()