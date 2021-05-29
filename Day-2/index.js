const prev = document.querySelector("#prev");
const next = document.querySelector("#next");
const circles = document.querySelectorAll(".circle");
const progress = document.getElementsByClassName("progress");

let currActive = 1;

next.addEventListener("click", () =>{
    currActive++;
    if(currActive > circles.length) {
        currActive = circles.length;
    }
    console.log(currActive);
    update();
})

prev.addEventListener("click", () =>{
    currActive--;
    if(currActive < 1) {
        currActive = 1;
    }
    update();
})

function update() {
    let actives = currActive;
    circles.forEach((circle, i) => {
        if(currActive === 1 ) {
            prev.disabled = true;
        } else if(currActive === circles.length) {
            next.disabled = true;
        } else {
            prev.disabled = false;
            next.disabled = false;
        }
    })
}