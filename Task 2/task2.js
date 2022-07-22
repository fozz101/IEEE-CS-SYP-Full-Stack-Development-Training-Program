// author: Fedi GALFAT
// fedi.galfat@ieee.org

var hoursLabel = document.getElementById("hours");
var minutesLabel = document.getElementById("minutes");
var secondsLabel = document.getElementById("seconds");
var totalSeconds = 0;
var startBtn = document.getElementById("start");
var pauseBtn = document.getElementById("pause");
var stopBtn = document.getElementById("stop");
var myInterval;



startBtn.addEventListener('click', function(){
     myInterval = setInterval(setTime, 1000);})


function setTime() {
  ++totalSeconds;
  secondsLabel.innerHTML = pad(totalSeconds % 60);
  minutesLabel.innerHTML = Number(pad(parseInt(totalSeconds / 60)))>=60 ? pad(parseInt(totalSeconds / 60)-60) : pad(parseInt(totalSeconds / 60)); 
  hoursLabel.innerHTML = pad(parseInt(totalSeconds / 3600));
}

function pad(val) {
  var valString = val + "";
  if (valString.length < 2) {
    return "0" + valString;
  } else {
    return valString;
  }
}

stopBtn.addEventListener('click', function(){
    clearInterval(myInterval);
    totalSeconds=0;
    secondsLabel.innerHTML = "00"
    minutesLabel.innerHTML = "00"; 
    hoursLabel.innerHTML = "00";
})

pauseBtn.addEventListener('click', function(){
    clearInterval(myInterval);})