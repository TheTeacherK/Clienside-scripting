// Your code here!



function Reken() {
    var getal1 = parseFloat(document.reken.getal1.value);

    
    var Teller=0;

    

    do {
        var uitkomst = getal1 * Teller;


        document.reken.uitkomst.value = document.reken.uitkomst.value + "\n" + uitkomst;

        Teller++;
    }
    while (Teller < 11);  



    

   
}

