let minutes = document.querySelector("#minutes");
let seconds = document.querySelector("#seconds");
let start = document.querySelector("#start");
let stop = document.querySelector("#stop");
let reset = document.querySelector("#reset");

let myTimer;

let myCounter =  0;

let mySecs = 0;

let myMins = 0;

start.addEventListener("click", function() {
        start.disabled = true;

        myTimer = setInterval(function() {

        myCounter++;

        mySecs = myCounter;

        seconds.innerHTML = mySecs;

        //Start counting seconds
        if (mySecs > 59) {
            seconds.innerHTML = "00";
            myCounter = 0;
            myMins++;
            
            
        } else if (mySecs > 9) {
            seconds.innerHTML = mySecs;
        } else {
            seconds.innerHTML = "0" + mySecs;
        }

        //Start counting minutes
        if (myMins > 59) {
            seconds.innerHTML = "00";
            minutes.innerHTML = "00";
            myCounter = 0;
            myMins = 0;
            mySecs = 0;
            clearInterval(myTimer);
            
        } else if (myMins > 9) {
            minutes.innerHTML = myMins;
        } else {
            minutes.innerHTML = "0" + myMins;
        }

        }, 1000);
})

stop.addEventListener("click", function() {
    start.disabled = false;
    clearInterval(myTimer);
})

reset.addEventListener("click", function() {
    start.disabled = false;
    clearInterval(myTimer);
    myCounter = 0;
    mySecs = 0;
    myMins = 0;
    seconds.innerHTML = "00";
    minutes.innerHTML = "00";
})