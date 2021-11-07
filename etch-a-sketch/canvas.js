//select canvas and shake button
const canvas = document.getElementById("etch-a-sketch");
const ctx = canvas.getContext("2d");
const btn = document.getElementById("shake");

//setup canvas
ctx.lineJoin = "round";
ctx.lineCap = "round";
ctx.lineWidth = 10;

ctx.beginPath(); //begin drawing
ctx.moveTo(200, 200); //move to this position in the canvas
ctx.lineTo(200, 200); //create a line at this position in the canvas
ctx.stroke(); //this actually draws the line at given position in the canvas
