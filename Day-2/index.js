const prev = document.getElementsById("prev");
const next = document.getElementsById("next");
const circles = document.querySelectorAll(".circle");
const progress = document.getElementsByClassName("progress");

let currActive = 1;

next.addEventListener("click", () =>{
    currActive++;
    if(currActive > circles.length) {
        currActive = circles.length;
    }
    console.log(currActive);
})

prev.addEventListener("click", () =>{
    currActive--;
    if(currActive < 1) {
        currActive = 1;
    }
})