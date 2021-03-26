
let resultado = document.querySelector('div#res');

const btnCalcular = document.querySelector('input#btnCalcular');
btnCalcular.addEventListener('click', calcularMedia);

export default function calcularMedia(nomeAluno, notaAluno01, notaAluno02) {
    var nomeAluno = document.querySelector('input#aluno01');
    var notaAluno01 = document.querySelector('input#nota01');
    var notaAluno02 = document.querySelector('input#nota01');

    
    if (nomeAluno.value == "") {
        alert("[ERRO] Insira o Nome do Aluno!");
    } else if ( notaAluno01.value == "" || notaAluno02.value == "") {
        alert("[ERRO] Insira as duas notas do Aluno!");
    } else {
        let media = (Number(notaAluno01.value) + Number(notaAluno02.value)) / 2;
        if (media >= 6) {
            resultado.innerHTML = `A média do Aluno é :${media}. <br/>Aluno ${nomeAluno.value} <strong>APROVADO<strong/>`;
;
        }
        else if (media >=4 ) {
            resultado.innerHTML = `A média do Aluno é :${media}. <br/>Aluno ${nomeAluno.value} <strong>EM RECUPERAÇÃO<strong/>`;
        
        }
        else {
            resultado.innerHTML = `A média do Aluno é :${media}. <br/>Aluno ${nomeAluno.value} <strong>REPROVADO<strong/>`;
        }
           
    }
    
}

