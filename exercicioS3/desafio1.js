
function detran(){
var velocidadePermitida = Number(prompt("Insira a velocidade permitida na via"))
var velocidadeCondutor = Number(prompt("Insira a velocidade do condutor"))

if(velocidadeCondutor <= velocidadePermitida){
alert("Não houve infração.")}

else if((velocidadeCondutor <=((velocidadePermitida * 0.1)) + velocidadePermitida)){
alert ("Infração leve")}

else { 
    alert("Multa grave")}

}
detran()


