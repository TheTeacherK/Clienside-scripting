// Your code here!



function Reken() {
    var getal1 = parseFloat(document.reken.getal1.value);
    var getal2 = parseFloat(document.reken.getal2.value);

    var OplossingGebruiker = parseFloat(document.reken.resultaat.value);
    
    var OplossingPc = getal1 + getal2;


    var juist = "Correct";
    var fout = "Ai! fout";


    if (OplossingGebruiker == OplossingPc) {
        document.reken.uitkomst.value = juist;
    }

    else {
              document.reken.uitkomst.value = fout;
    }



    

}

