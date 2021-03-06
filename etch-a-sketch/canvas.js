//select canvas and shake button
const canvas = document.getElementById("etch-a-sketch");
const btn = document.getElementById("btn");
const ctx = canvas.getContext("2d");
let hue = 0;
//setup canvas
ctx.lineJoin = "round";
ctx.lineCap = "round";
ctx.lineWidth = 10;
ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;

//using destructuring to create widht and height varibles from canvas properties
const { width, height } = canvas;

//generating random x and y coordinate for drawing
let x = Math.floor(Math.random() * width);
let y = Math.floor(Math.random() * height);

ctx.beginPath(); //begin drawing
ctx.moveTo(x, y); //move to this position in the canvas
ctx.lineTo(x, y); //create a line at this position in the canvas
ctx.stroke(); //this actually draws the line at given position in the canvas

function draw({ key }) {
  hue += 10;
  ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;
  ctx.beginPath();
  ctx.moveTo(x, y);
  switch (key) {
    case "ArrowUp":
      y -= 10;
      break;
    case "ArrowDown":
      y += 10;
      break;
    case "ArrowLeft":
      x -= 10;
      break;
    case "ArrowRight":
      x += 10;
      break;
    default:
      break;
  }
  ctx.lineTo(x, y);
  ctx.stroke();
}
function clearCanvas() {
  canvas.classList.add("shake");
  ctx.clearRect(0, 0, width, height);
  canvas.addEventListener(
    "animationend",
    function () {
      canvas.classList.remove("shake");
    },
    { once: true } //listen for event only once
  );
}

function handleKey(e) {
  if (e.key.includes("Arrow")) {
    e.preventDefault();
    draw({ key: e.key });
  }
}

window.addEventListener("keydown", handleKey);
btn.addEventListener("click", clearCanvas);
