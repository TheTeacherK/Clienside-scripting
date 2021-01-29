// Your code here!

function Reken(getal1){
var dag;

switch (getal1)
{
 case 1:
 dag ="Maandag";
 break;

 case 2:
 dag ="Dinsdag";
 break;

 case 3:
 dag ="Woensdag";
 break;

 case 4:
 dag ="Donderdag";
 break;

 case 5:
 dag ="Vrijdag";
 break;

 case 6:
 dag ="Zaterdag";
 break;

 case 7:
 dag ="Zondag";
 break;

 default:
          dag = "Verkeerde input!";

}


// uitkomst weg scrhijven
   document.getElementById("uitkomst").value = dag; 

}
