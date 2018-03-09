/* Timer */

var minutes = 60;
var seconds = 00;
var milliseconds = 00;
var startTimer = false;

var answer = ["BOOM","DYNAMITE","JAUNE","TIC TAC","SPECTRAL","MOSCOU","MOLECULES","DESACTIVEE"];

var badAnswerText = ["Mauvaise réponse !! Essaie encore",
                     "Ah c'est faux, tu peux mieux faire...",
                     "Gniark Gniark Gniark",
                     "Encore un agent de pacotille!!!"
                     ];

var goodAnswerText = ["Bonne réponse mais je ne suis pas vaincu !!!",
                      "Tu avances mais tu ne me battras pas !!!",
                      "Tu es courageux mais ça ne suffira pas...",
                      "Tu es fort mais la victoire sera à moi"
                     ];

var el = document.getElementById("timer"); 
el.addEventListener("click", manageTimer, false); 

function getRandom(a) {
    
    var rand = Math.floor(Math.random() * a.length);
    
    return rand;
}

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

/* Enigma */

$( ".submit-enigma" ).submit(function() {
    console.log("this is id :" + this.id);
    enigma(this.id);
});

function goodAnswer(id) {
    $('#modal-enigma-' + id ).modal("hide");
    var a = document.getElementById("img-enigma-" + id);
    a.classList.remove("red-bg");
        a.classList.add("green-bg");
        a.dataset.target = "";
}


function enigma(id) {
    var x = document.forms[id]["answer-enigma-" + id].value.toUpperCase();
    if (x != answer[id].toUpperCase()) {
        console.log("bah !!!");
        var y = document.getElementById("bad-enigma-" + id);
        y.innerText = badAnswerText[getRandom(badAnswerText)];
    } else {
        console.log("youpi");
        var z = document.getElementById("bad-enigma-" + id);
        z.classList.remove("red-text");
        z.classList.add("green-text");
        z.innerText = goodAnswerText[getRandom(goodAnswerText)];
        window.setTimeout(function(){ return goodAnswer(id);},3000);
    }
}

window.onload().requestFullscreen();