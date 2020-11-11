// Your code here!



function Reken() {
    var getal1 = parseFloat(document.reken.getal1.value);
    var getal2 = parseFloat(document.reken.getal2.value);

    var bewerking = document.reken.bewerking.value;
    var uitkomst = 0;

    switch (bewerking) {


        case "+" :
            uitkomst = getal1 + getal2;
            break;

        case "-" :
            uitkomst = getal1 - getal2;
            break;

        case "*":
            uitkomst = getal1 * getal2;
            break;

        case "/":
            uitkomst = getal1 / getal2;
            break;



    }

       
    document.reken.uitkomst.value = uitkomst;

}

