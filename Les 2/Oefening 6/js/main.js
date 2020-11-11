function validateDays() {
  //lege varibale voor de keuze in op te slagen
    var keuze ="";

//controle werke radiobutton is aangevinkd

  // radiobutton 1
    if (document.getElementById('option1').checked == true) {
        // foto wegschrijven voor keuze 1
        document.getElementById('afbeelding').src = 'images/beer.jpg';
        //var instellen op beer
        var keuze = "Beer";
    }

  // radiobutton 2
    else if (document.getElementById('option2').checked == true) {
        document.getElementById('afbeelding').src = 'images/kat.jpeg';
        var keuze = "Kat";
    }

  // radiobutton 3
    else if (document.getElementById('option3').checked == true) {
        document.getElementById('afbeelding').src = 'images/hond.jpg';
        var keuze = "Hond";
    }

  // keuze wegschrijven naar tekstveld
    document.getElementById('uitkomst').value = keuze;
}
