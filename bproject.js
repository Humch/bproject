/* Timer */

var minutes = 60;
var seconds = 00;
var milliseconds = 00;
var startTimer = false;

var el = document.getElementById("timer"); 
el.addEventListener("click", manageTimer, false); 

function manageTimer() {
    console.log("moot!");
    if ( !startTimer) {
        counter = window.setInterval(timer,1000);
        startTimer = true;
    } else {
        clearInterval(counter);
        startTimer = false;
    }
}

function timer() {
    if (seconds === 0) {
        minutes--;
        seconds = 59;
    } else {
        seconds--;
    }
    var a = document.getElementById("clock-minutes");
    a.textContent = minutes;
    var b = document.getElementById("clock-seconds");
    if (seconds < 10) {
        b.textContent = "0" + seconds;
    } else {
        b.textContent = seconds;
    }
}

 /* Enigma 1*/

var submitEnigma1 = document.getElementById("submit-enigma1");
submitEnigma1.addEventListener("submit", enigmaOne, false);

function goodAnswer() {
    $('#enigma-one').modal("hide")
    var a = document.getElementById("img-enigma-one");
    a.classList.remove("red-bg");
        a.classList.add("green-bg");
        a.dataset.target = "";
}


function enigmaOne() {
    console.log("pop");
    var x = document.forms["submit-enigma1"]["answer-enigma-1"].value;
    if (x != "bob") {
        console.log("bah !!!");
        var y = document.getElementById("bad-enigma-1");
        y.innerText = "Mauvaise réponse !! Essaie encore";
    } else {
        console.log("youpi");
        var z = document.getElementById("bad-enigma-1");
        z.classList.remove("red-text");
        z.classList.add("green-text");
        z.innerText = "Bonne réponse mais je ne suis pas vaincu !!!";
        window.setTimeout(goodAnswer,3000);
    }
}