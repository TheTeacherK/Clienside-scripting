function Reken() {

    var Aantal = 2;
    var Teller = 0;
    var Groei = 1.15;

    for (Teller = 0; Aantal <10; Teller++)
    {
        Aantal = Aantal * Groei;
    }

 document.getElementById('uitkomst').value = "Binnen "  +  Teller + " jaar zijn er 10 miljoen ratten in NY.";

}
