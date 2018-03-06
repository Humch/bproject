/* Timer */

var minutes = 60;
var seconds = 00;
var milliseconds = 00;
var startTimer = false;

var answer = ["bob0","bob1","bob2","bob3","bob4","bob5","bob6","bob7"];

var badAnswerText = ["Mauvaise réponse !! Essaie encore",
                     "Ah c'est faux, tu peux mieux faire..."
                     ];

var goodAnswerText = ["Bonne réponse mais je ne suis pas vaincu !!!"];

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
    var x = document.forms[id]["answer-enigma-" + id].value;
    if (x != answer[id]) {
        console.log("bah !!!");
        var y = document.getElementById("bad-enigma-" + id);
        y.innerText = badAnswerText[id];
    } else {
        console.log("youpi");
        var z = document.getElementById("bad-enigma-" + id);
        z.classList.remove("red-text");
        z.classList.add("green-text");
        z.innerText = goodAnswerText[id];
        window.setTimeout(function(){ return goodAnswer(id);},3000);
    }
}