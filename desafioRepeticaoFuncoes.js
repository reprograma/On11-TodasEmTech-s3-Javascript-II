/* DESAFIO DE REPETIÇAO e FUNCAO

    //Crie um programa que verifique o valor inserido pelo usuário e imprima 
    seus multiplos ( MAX 100 Numeros ) */

function multiplo() {
    let numero = Number(prompt("Digite um numero"));
    let cont = 0;

    if (numero <= 100) {
        while (cont <= numero) {
            for (var i = 0; i <= numero; i++) {
                if ((cont * i) == numero) {
                    alert(`${i} é multiplo de ${numero}`)
                }
            }
            cont++;
        }
    } else {
        alert("numero maior que 100, tente novamente")
        return multiplo();
    }
}
multiplo();