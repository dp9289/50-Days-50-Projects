let bg = document.querySelector(".bg");
let text = document.querySelector(".text");

let number = 0;
// window.addEventListener("load", () => {
let timer = setInterval(counter, 30);

// })

function counter() {
    number++;
    if (number > 99) {
        clearInterval(timer);
    }
    text.innerText = `${number}%`
    text.style.opacity = scale(number, 0, 100, 1, 0)
    bg.style.filter = `blur(${scale(number, 0, 100, 30, 0)}px)`
}

// Reference: https://stackoverflow.com/questions/10756313/javascript-jquery-map-a-range-of-numbers-to-another-range-of-numbers
function scale(number, inMin, inMax, outMin, outMax) {
    return (number - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
}