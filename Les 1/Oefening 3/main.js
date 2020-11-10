function FN_Plus(){
var Getal1 = parseFloat(document.getElementById('getal1').value);
var Getal2 = parseFloat(document.getElementById('getal2').value);

var uitkomst = Getal1 + Getal2

document.getElementById('Uitkomst').value = uitkomst;
}


function FN_Min(){
var Getal1 = parseFloat(document.getElementById('getal1').value);
var Getal2 = parseFloat(document.getElementById('getal2').value);

var uitkomst = Getal1 - Getal2

document.getElementById('Uitkomst').value = uitkomst;
}



function FN_Maal(){
var Getal1 = parseFloat(document.getElementById('getal1').value);
var Getal2 = parseFloat(document.getElementById('getal2').value);

var uitkomst = Getal1 * Getal2

document.getElementById('Uitkomst').value = uitkomst;
}



function FN_Delen(){
var Getal1 = parseFloat(document.getElementById('getal1').value);
var Getal2 = parseFloat(document.getElementById('getal2').value);

var uitkomst = Getal1 / Getal2

document.getElementById('Uitkomst').value = uitkomst;
}


function FN_Clear(){
document.getElementById('getal1').value=" ";
document.getElementById('getal2').value=" ";
document.getElementById('Uitkomst').value=" ";
}

function FN_Exit(){
  window.close();
}
