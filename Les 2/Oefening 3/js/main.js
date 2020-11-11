// Your code here!



function Rapport() {


    var PuntenFrans = parseFloat(document.punten.PuntenFrans.value);
    var PuntenWiskunde = parseFloat(document.punten.PuntenWiskunde.value);
    var PuntenIt = parseFloat(document.punten.PuntenIt.value);
    var PuntenEconomie = parseFloat(document.punten.PuntenEconomie.value);
    var PuntenEngels = parseFloat(document.punten.PuntenEngels.value);

    var gemiddelde = 0;
    var buizen = 0;
    var uitkomst = " ";


    if (PuntenFrans < 50)  { buizen++; }

    if (PuntenWiskunde < 50) { buizen++; }

    if (PuntenIt < 50) { buizen++; }

    if (PuntenEconomie < 50) { buizen++; }

    if (PuntenEngels < 50) { buizen++; }

    gemiddelde = (PuntenFrans + PuntenWiskunde + PuntenIt + PuntenEconomie + PuntenEngels) / 5;


    if (buizen > 2) { uitkomst = "Niet geslaagd"; }
    else 
    { uitkomst = "Geslaagd"; }


    document.punten.uitkomst.value = "Je gemiddelde is: " + gemiddelde + " Je behaalde: " + buizen + " buizen. "  +  " Je bent dus: " + uitkomst;

}

