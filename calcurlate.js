const display = document.querySelector(".display");

function showDisplay(event) {

    if (display.innerText == 0) {
        return display.innerText = event.target.innerText;
    }
    return display.innerText += event.target.innerText;

}

function resualt() {
    let value = display.innerText;
    display.innerText = (eval(value));
}

function clear() {
    if (display.innerText.length == 1) {

        display.innerText = 0;
    } else {
        display.innerText = display.innerText.substring(0, display.innerText.length - 1);
    }
}


function allClear() {
    display.innerText = 0;

}
let list = document.querySelectorAll(".show-display");

list.forEach(item => {
    item.addEventListener("click", showDisplay)
})

document.querySelector(".button-equal").addEventListener("click", resualt);
document.querySelector(".button-C").addEventListener("click", clear);
document.querySelector(".button-AC").addEventListener("click", allClear);