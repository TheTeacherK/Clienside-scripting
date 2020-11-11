// Your code here!



function Reken() {
    var codeInput = document.taal.code.value;

    var codeInput = codeInput.toUpperCase();
    
    switch (codeInput) {


        case "NL" :
            uitkomst = "Goede dag";
            break;

        case "EN" :
            uitkomst = "Good day";


            break;

        case "FR":
            uitkomst = "Bonjour";
            break;


        case "DU":
            uitkomst = "Guten tag";
            break;



    }

       
    document.taal.uitkomst.value = uitkomst;

}

