// Your code here!

var Nr1 = []; 
var Nr2 = []; 
var NrUitkomst = []; 

function Reken() {

    // Output veld leeg maken. 
    document.getElementById('uitkomst').innerHTML = "";


    for (Teller = 0; Teller < 11; Teller++)
    {
        // random getal tussen 0 en 10
        Nr1[Teller] = Math.floor(Math.random() * 10);
        Nr2[Teller] = Math.floor(Math.random() * 10);

        // in Array 3 plaatsen we de som van de getallen uit de vorige 2 Arrays
        NrUitkomst[Teller] = Nr1[Teller] + Nr2[Teller];

        document.getElementById('uitkomst').innerHTML += Nr1[Teller] + " + " + Nr2[Teller] + " = " + NrUitkomst[Teller] + "\n";
    }


      
  
  



}

