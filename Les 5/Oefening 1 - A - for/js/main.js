function Reken() {
    var getal1 = parseFloat(document.getElementById('getal1').value);

    var Teller;

// we maken een loop
//begint met de teller op 0,
//loopt zolang de teller kleiner is dan 11
// verhoogt de teller met  1 na elke loop.

    for (Teller = 0; Teller < 11; Teller++)
        {
        var uitkomst = getal1 * Teller;
        document.getElementById('uitkomst').value = document.getElementById('uitkomst').value + "\n" +  uitkomst;
        }
}
