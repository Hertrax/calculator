let operator = "";
let previousvalue = "";
let currentvalue = '';


document.addEventListener("DOMContentLoaded", function() {
    let clear = document.querySelector(".clear");
    let decimal = document.querySelector(".decimal");
    let equal = document.querySelector(".equal");

    let numbers = document.querySelectorAll(".number");
    let operators = document.querySelectorAll(".operators");

    let previousscreen = document.querySelector(".previousdisplay");
    let currentscreen = document.querySelector(".currentdisplay");

    numbers.forEach((number) => number.addEventListener("click", function(e){
        handlenum(e.target.textContent);
        currentscreen.textContent = currentvalue;
    }))

    operators.forEach((op) => op.addEventListener("click", function(e) {
        handleops(e.target.textContent);
        previousscreen.textContent = previousvalue + " " + operator;
        currentscreen.textContent = "";
    }))

    clear.addEventListener("click", function() {
        previousvalue = " ";
        currentvalue = '';
        previousscreen.textContent = '';
        currentscreen.textContent = '';
        operator = '';
    })

    equal.addEventListener("click", function () {
        if (previousvalue != "" && currentvalue != "") {
          calculate();
          previousscreen.textContent = "";
          if (previousvalue.length <= 10) {
            currentscreen.textContent = previousvalue;
            }
          else {
            currentscreen.textContent = previousvalue.slice(0, 10) + "...";
           }
    }
    })
})

function handlenum(num) {
    if (currentvalue.length <= 10){
       currentvalue += num;
    }
}

function handleops(op) {
    operator = op;
    previousvalue = currentvalue;
    currentvalue = "";
}

function calculate() {
    currentvalue = Number(currentvalue);
    previousvalue = Number(previousvalue);

    if (operator === "+") {
        previousvalue += currentvalue;
        currentvalue = previousvalue;
    }
    else if (operator === "-") {
        previousvalue -= currentvalue;
        currentvalue = previousvalue;
    }
    else if (operator === "x") {
        previousvalue *= currentvalue;
        currentvalue = previousvalue;
    }
    else if (operator === "÷") {
        previousvalue /= currentvalue;
        currentvalue = previousvalue;
    }
}