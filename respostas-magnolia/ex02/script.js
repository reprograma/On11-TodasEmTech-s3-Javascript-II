/*  Exercício 2:
*   Etapa 1 = Elaborar um programa que calcule a média do aluno.
*   Etapa 2 = Informar se ele foi aprovado (utilizar estrutura condicional).
*   Etapa 3 = GARANTIR que todos os campos serão preenchidos (utilizar return).
*/

// Pegar dados do aluno
function infoAluno() {    

    let nome = prompt('Digite o nome do aluno')
    let nota1 = Number(prompt('Informe a 1ª nota'))
    let nota2 = Number(prompt('Informe a 2ª nota'))

    // Calcular média do aluno
    function calcMediaAluno(n, n1, n2) {

        // Antes de calcular a média verificar se os dados foram preenchidos
        if(n == '' || n1 == '' || n2 == '') {
            
            alert('Por favor, insira todos os dados.')
            return infoAluno()

        }

        // Calculo da media
        const media = (n1 + n2) / 2

        // Verifica se o aluno foi aprovado ou reprovado
        if(media >= 6) {
            return alert(nome + ' a sua média foi ' + media + '. Parabéns, você foi APROVADO!')
        } else {
            return alert(nome + ' a sua média foi ' + media + '. Você foi REPROVADO!')
        }
    }
    calcMediaAluno(nome, nota1, nota2)
}
infoAluno()