"use strict"

const str = "Please type this as fast as you can.";
const text = document.querySelector(".text");
const input = document.querySelector(".input");
const progressBar = document.querySelector(".progress-bar");

const charEls = [];
let timer = null;

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
            alert("Time's up!");
        }, 10000 );
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
        }
    });
    if(val.length === str.length && errorCount === 0){
        alert("You win!");
        clearTimeout(timer);
    }
});


populateText(str);
