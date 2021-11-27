"use strict"

const text = document.querySelector(".text");
const input = document.querySelector(".input");
const progressBar = document.querySelector(".progress-bar");
const errors = document.querySelector(".errors");
const time = document.querySelector(".time");

const str = "Please type this as fast as you can.";
const charEls = [];
let timer = null;
let showtime;
let seconds = 9;
let totalErrors = 0;

function populateText(str){
    str.split("").map(letter => {
        const span = document.createElement("span");
        span.innerText = letter;
        text.appendChild(span);
        charEls.push(span);// Adding span in array
    })
}

function resetCharEls(){
    charEls.map(charEl => {
        charEl.classList.remove("correct");
        charEl.classList.remove("wrong");
    });
}

input.addEventListener("keyup", () => {
    if(!timer){
        progressBar.classList.add("active")
        timer = setTimeout( () => {
            alert("Finish! >:( ");
        }, 10000 );
        showtime = setInterval( () => {
            time.innerHTML = `${seconds}s`;
            seconds--;
            if (seconds < 0){
                clearInterval(showtime);
                time.innerHTML = `0s`;
            }
        }, 1000);
    }
    const val = input.value;
    let errorCount = 0;
    resetCharEls();
    val.split("").map((letter, i) => {
        if(letter === str[i]){
            charEls[i].classList.add("correct");
        }
        else{
            charEls[i].classList.add("wrong");
            errorCount++;
            totalErrors++;
            errors.innerHTML = `errors: ${errorCount}`;
        }
    });
    if(val.length === str.length && errorCount === 0){
        alert("You win!");
        clearTimeout(timer);
    }
});

populateText(str);
