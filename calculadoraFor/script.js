//DESCULPA... ME EMPOLGUEI

const txtValor = document.querySelector('input#txtValor');
const btnIgual = document.querySelector('button#btnIgual');
btnIgual.addEventListener('click', calcular);

const btnMais = document.querySelector('button#btnMais');
const btnMenos = document.querySelector('button#btnMenos');
const btnDividir = document.querySelector('button#btnDividir');
const btnMult = document.querySelector('button#btnMult');
var res = document.querySelector('div#res');


var operadorUtilizado = "";
var calculos = [];
    
txtValor.value = "";


function buscarValor(valorClicado) { 


    switch (valorClicado) {
        case 1:
            txtValor.value = txtValor.value + 1;
            console.log(txtValor.value)
            break;
        case 2:
            txtValor.value = txtValor.value + 2;
            console.log(txtValor.value)
            break;
        case 3:
            txtValor.value = txtValor.value + 3;
            break;
        case 4:
            txtValor.value = txtValor.value + 4;
            break;
        case 5:
            txtValor.value = txtValor.value + 5;
            break;
        case 6:
            txtValor.value = txtValor.value + 6;
            break;
        case 7:
            txtValor.value = txtValor.value + 7;
            break;
        case 8:
            txtValor.value = txtValor.value + 8;
            break;
        case 9:
            txtValor.value = txtValor.value + 9;
            break;
        case 0:
            txtValor.value = txtValor.value + 0;
            break;
    }
   
}

function operador(OpeSelecionado) {
    
    
    operadorUtilizado = "";

    switch(OpeSelecionado) {
        case "+":
            operadorUtilizado = '+';
            calculos.push(Number(txtValor.value));
            txtValor.value = "";
            btnMenos.disabled = true;
            btnDividir.disabled = true;
            btnMult.disabled = true;
            break;
        case "-":
            operadorUtilizado = '-';
            calculos.push(Number(txtValor.value));
            txtValor.value = "";
            btnMais.disabled = true;
            btnDividir.disabled = true;
            btnMult.disabled = true;
            break;
        case "/":
            operadorUtilizado = '/';
            calculos.push(Number(txtValor.value));
            txtValor.value = "";
            btnMais.disabled = true;
            btnMenos.disabled = true;
            btnMult.disabled = true;
            break;
        case "*":
            operadorUtilizado = '*';
            calculos.push(Number(txtValor.value));
            txtValor.value = "";
            btnMais.disabled = true;
            btnMenos.disabled = true;
            btnDividir.disabled = true;
            break;
    }

}

function calcular() {
    

    if (operadorUtilizado == "+") {
        calculos.push(Number(txtValor.value));
        txtValor.value = "";
        let reduce = calculos.reduce(function(acc,cur) {
            return acc + cur;

        });
        txtValor.value = reduce;
        calculos = [];
        btnMenos.disabled = false;
        btnDividir.disabled = false;
        btnMult.disabled = false;
        console.log(calculos);
        console.log(txtValor.value);

    }
    else if (operadorUtilizado == "-") {
        calculos.push(Number(txtValor.value));
        txtValor.value = "";
        let reduce = calculos.reduce(function(acc,cur) {
            return acc - cur;
        });
        txtValor.value = reduce;
        calculos = [];
        btnMais.disabled = false;
        btnDividir.disabled = false;
        btnMult.disabled = false;
        console.log(calculos);
        console.log(txtValor.value);

    }
    else if (operadorUtilizado == "/") {
        calculos.push(Number(txtValor.value));
        txtValor.value = "";
        let reduce = calculos.reduce(function(acc,cur) {
            return acc / cur;
        });
        txtValor.value = reduce;
        calculos = [];
        btnMais.disabled = false;
        btnMenos.disabled = false;
        btnMult.disabled = false;
        console.log(calculos);
        console.log(txtValor.value);

    }
    else if (operadorUtilizado == "*") {
        calculos.push(Number(txtValor.value));
        txtValor.value = "";
        let reduce = calculos.reduce(function(acc,cur) {
            return acc * cur;
        });
        txtValor.value = reduce;
        calculos = [];
        btnMais.disabled = false;
        btnMenos.disabled = false;
        btnDividir.disabled = false;
        console.log(calculos);
        console.log(txtValor.value);   
    }
}