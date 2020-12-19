// Your code here!



function Reken() {

    var getal1 = parseFloat(document.getElementById('getal1').value);
    var zin = document.getElementById('zin').value;
    var Teller;

    for (Teller = 1; Teller <= getal1; Teller++)
    {
       document.getElementById('uitkomst').value = document.getElementById('uitkomst').value + "\n" +  zin + " - nr: " + Teller;
    }


}
