function BerichtWeergeven(){

var Melding = document.getElementById('bericht').value;

var MeldingHoofletters = Melding.toUpperCase();

document.getElementById('Output').value= MeldingHoofletters;

}
