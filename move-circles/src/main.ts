import "./style.css";
const $ = document.querySelector.bind(document);
const canvas = $("#canvas")! as HTMLCanvasElement,
  context = canvas.getContext("2d")!;
const windowWidth = window.innerWidth;
const windowHeight = window.innerHeight;

canvas.height = windowHeight;
canvas.width = windowWidth;
canvas.style.backgroundColor = "#ff8";

context.fillRect(20, 20, 100, 200);
context.fillStyle = "red";
context.fillRect(40, 220, 100, 200);

// context.beginPath();
context.strokeStyle = "blue";
context.lineWidth = 20;
context.arc(300, 300, 80, 0, Math.PI * 2, false);
context.stroke();
// context.closePath()


export {};
