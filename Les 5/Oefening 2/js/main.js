// Your code here!



function Reken() {
    var getal1 = parseFloat(document.reken.getal1.value);
    var zin = document.reken.zin.value;



    var Teller;

    for (Teller = 1; Teller <= getal1; Teller++) {

               document.reken.uitkomst.value = document.reken.uitkomst.value + "\n" +  zin + " - nr: " + Teller;

    } 
        

    

   
}

