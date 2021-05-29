const prev = document.querySelector("#prev");
const next = document.querySelector("#next");
const circles = document.querySelectorAll(".circle");
const progress = document.querySelector(".progress");

let currActive = 1;

next.addEventListener("click", () =>{
    currActive++;
    if(currActive > circles.length) {
        currActive = circles.length;
    }
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
    if(currActive === 1 ) {
        prev.disabled = true;
    } else if(currActive === circles.length) {
        next.disabled = true;
    } else {
        prev.disabled = false;
        next.disabled = false;
    }

    circles.forEach((circle, i) => {
        if(i < currActive) {
            circle.classList.add('active');
        } else {
            circle.classList.remove('active');
        }
    });

    let actives = document.querySelectorAll('.active');

    progress.style.width = ((actives.length-1)/ (circles.length-1)) * 100 + '%';
}