
function verifyVowel(){
    var letter = document.getElementById("fieldLetter").value;
    if (letter.length >=2){
        alert("Please give a Letter !");
    }
    else {
        switch(letter){
            case "a":
                alert("Vowel !");
                break;
            case "e":
                alert("Vowel !");
                break;
            case "i":
                alert("Vowel !");
                break;
            case "o":
                alert("Vowel !");
                break;
            case "o":
                alert("Vowel !");
                break;
            default:
                alert("Not Vowel !")

        }
        
    }

}




