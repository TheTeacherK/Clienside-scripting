// Your code here!



function Reken() {
    var getal1 = parseFloat(document.reken.getal1.value);
    var getal2 = parseFloat(document.reken.getal2.value);
    var getal3 = parseFloat(document.reken.getal3.value);
    var getal4 = parseFloat(document.reken.getal4.value);
    var getal5 = parseFloat(document.reken.getal5.value);

    var Teller = 0;

    var GrootsteGetal = 0;


    for (Teller = 1; Teller <= 5; Teller++)
    {
        // functie die van 2 variable kijkt welk de grootste is
        GrootsteGetal = Math.max(GrootsteGetal, getal1);

        // we plaatsen het volgende getal steeds in getal 1 zodat alle getallen 1 keer
        // voorkomen in de bovenstaande functie.


        getal1 = getal2;
        getal2 = getal3;
        getal3 = getal4;
        getal4 = getal5;

    }


    document.reken.uitkomst.value =  GrootsteGetal + " is het grootste getal";

}

