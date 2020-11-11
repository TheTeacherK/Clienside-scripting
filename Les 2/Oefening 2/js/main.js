// Your code here!



function Reken() {
    var Aantalschoenen = parseFloat(document.reken.Aantalschoenen.value);

    var PrijsSchoenen = 125;

    var Tebetalen = 0;


    if (Aantalschoenen == 1)
    { Tebetalen = (PrijsSchoenen * Aantalschoenen) - 0.2 * (PrijsSchoenen * Aantalschoenen)}

    else {

        if (Aantalschoenen == 2)
        { Tebetalen = (PrijsSchoenen * Aantalschoenen) - 0.4 * (PrijsSchoenen * Aantalschoenen) }

       else
        { Tebetalen = (PrijsSchoenen * Aantalschoenen) - 0.6 * (PrijsSchoenen * Aantalschoenen) }

};


document.reken.uitkomst.value = Tebetalen;

}

