function Reken() {

    var getal1 = parseFloat(document.getElementById('getal1').value);
    var Teller = 0;
    var Product = 0;


    if (getal1 < 10)
    {
        for (Teller = 1; Teller < 11; Teller++)
        {
            Product = getal1 * Teller;
            document.getElementById('uitkomst').value = document.getElementById('uitkomst').value + getal1  + " * " + Teller + " = " + Product + "\n";
        }
    }

    else
    {
        document.getElementById('uitkomst').value = "Geef een getal kleiner in dan 10";
    }

}
