let veloxPadrao = Number(prompt("Digite a velocidade permitida da via:"));
let veloxMotor = Number(prompt("Digite a sua velocidade:"));

function multaCalc() 
{


    if (veloxMotor <= veloxPadrao) {
    alert ("Sem multa");
    }

    else if (veloxMotor > 1.20 * veloxPadrao) 
    {
        alert ("Multa grave");
        }
    
    else if (veloxMotor <= 1.10 * veloxPadrao)
    {
        alert ("Multa leve");
    }
}
 multaCalc()