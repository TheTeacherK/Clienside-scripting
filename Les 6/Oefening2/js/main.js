// Your code here!





function Reken() {


    // Div leeg maken
    document.getElementById('myList').innerHTML = "";

    // Array maken met de dagen van de week.
    var Dagen = ["Maandag", "Dinsdag", "Woensdag", "Donderdag", "Vrijdag", "Zaterdag", "Zondag"];



    // Aanmaken van een nieuwe lijst (ul)
    var ul = document.createElement('ul');

    // Aanspreken van de DIV met ID myList en we voegen de lijst er aan toe
    document.getElementById('myList').appendChild(ul);

    // Lijst vullen met LI per item in onze Array

    // loop die elk element uit onze Array aanspreekt en in een nieuwe functie dag steekt
    Dagen.forEach(function (dag) {

        // we maken een nieuwe list item aan
        var li = document.createElement('li');
        // We voegen de li toe aan onze Lijst
        ul.appendChild(li);
        // We plaatsen de waarde die tijdelijk in de functie dag zit in de LI
        li.innerHTML += dag;
    });



}

