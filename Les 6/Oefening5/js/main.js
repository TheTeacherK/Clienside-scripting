// Your code here!

var Namen = []; 
var Teller = 0;


function Reken() {

        
    if (Teller < 5) {

        var naam = document.getElementById("InputGebruiker").value;

        Namen[Teller] = naam;


        document.getElementById('uitkomst').innerHTML += Namen[Teller] + "\n";

    }

    else {
        document.getElementById('uitkomst').innerHTML = "Je hebt al 5 geregisteerd." + "\n" + "Sluit het programma af";
    }

    Teller++;
}


function Hoeveel() {
    document.getElementById('Aantal').value = Namen.length;

}