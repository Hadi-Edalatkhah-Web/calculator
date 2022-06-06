const displayBox = document.querySelector(".display");
const list = document.querySelectorAll(".show-display");

function showDisplay(event) {
    const value = event.target.innerText;
    if (displayBox.innerText == 0) {
        return displayBox.innerText = value;
    }
    return displayBox.innerText += value;
}

function resualt() {
    let final = displayBox.innerText;

    return displayBox.innerText = eval(final);


}

function clear() {
    let text = displayBox.innerText;
    if (text.length === 1) {
        displayBox.innerText = 0;

    } else {
        displayBox.innerText = text.substring(0, text.length - 1)
    }
}
function allClear()
{
    displayBox.innerText=0; 
}

list.forEach(item => {
    item.addEventListener("click", showDisplay)
})

document.querySelector(".button-equal").addEventListener("click", resualt);
document.querySelector(".button-C").addEventListener("click", clear);
document.querySelector(".button-AC").addEventListener("click",allClear);