// Your code here!

function Reken() {

    var getal1 = parseFloat(document.getElementById('getal1').value)
    var Teller=0;

    do {
        var uitkomst = getal1 * Teller;
        document.getElementById('uitkomst').value = document.getElementById('uitkomst').value + "\n" +  uitkomst;
        Teller++;
    }   while (Teller < 11);
}
