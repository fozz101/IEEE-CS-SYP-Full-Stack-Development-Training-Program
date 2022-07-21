
function verifyPrime(){
    var number = document.getElementById("fieldNumber").value;
    if (number <= 1){
        alert("Not Prime !");
    }
    else {
        for (var i=2; i <= Math.sqrt(number);i++){
            if (number % i === 0){
                alert("Not Prime !");
                break;
            }
        }
        alert("Prime !")
    }

}




