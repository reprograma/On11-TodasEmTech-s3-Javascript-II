

function multaCalc(veloxPadrao, veloxMotor) 
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
 multaCalc(50, 80)