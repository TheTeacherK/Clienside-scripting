// Your code here!



function Reken() {
    var getal1 = parseFloat(document.reken.getal1.value);



    var Teller;

    for (Teller = 0; Teller < 11; Teller++) {

        var uitkomst = getal1 * Teller;


        document.reken.uitkomst.value = document.reken.uitkomst.value + "\n" +  uitkomst;

    } 
        

    

   
}

