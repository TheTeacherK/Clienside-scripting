// Your code here!

var Getallen = []; 
var Teller = 0;


function Reken() {

        
    if (Teller < 5) {

        var naam = parseFloat(document.getElementById("InputGebruiker").value);

        Getallen[Teller] = naam;
        
        document.getElementById('uitkomst').innerHTML += Getallen[Teller] + "\n";

    }

    else {
        document.getElementById('uitkomst').innerHTML = "Je hebt al 5 geregisteerd." + "\n" + "Sluit het programma af";
    }

    Teller++;
}


function Hoeveel() {

    document.getElementById("uitkomst").innerHTML += "----------------------" + "\n";

    
    Getallen.sort();

    Getallen.forEach(myFunction);

    function myFunction(item) {
        document.getElementById("uitkomst").innerHTML +=  item + "\n";
    } 



}