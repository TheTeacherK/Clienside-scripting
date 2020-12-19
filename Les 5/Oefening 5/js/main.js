// Your code here!



function Reken() {
    var getal1 = parseFloat(document.reken.getal1.value);
    

    var Teller = 0;

    var Product = 0;


    if (getal1 < 10) {

        for (Teller = 1; Teller < 11; Teller++)
        {
            Product = getal1 * Teller;

            document.reken.uitkomst.value = document.reken.uitkomst.value + Product + " * " + Teller + " = " + Product + "\n";

        }

    }


    else
    {
        document.reken.uitkomst.value = "Geef een getal kleiner in dan 10";
    }


   
   

}

