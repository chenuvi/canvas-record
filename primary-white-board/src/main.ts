import "./style.css";
// canvas 工具样式
import "./container.css";
const $ = document.querySelector.bind(document);
const canvas = document.querySelector<HTMLCanvasElement>("#canvas")!;
// init Vars
let initBgColor = "white";
let drawWidth = 2;
let drawColor = "red";
let isDrawing = false;
// init Setting
canvas.width = window.innerWidth - 60;
canvas.height = 400;
const ctx = canvas.getContext("2d")!;
ctx.fillStyle = initBgColor;
ctx.fillRect(0, 0, canvas.width, canvas.height);

canvas.addEventListener("touchmove", draw, false);
canvas.addEventListener("touchend", stop, false);

canvas.addEventListener("mousedown", start, false);
canvas.addEventListener("mousemove", draw, false);
canvas.addEventListener("mouseup", stop, false);

function start(event: MouseEvent | TouchEvent) {
  isDrawing = true;
  ctx.beginPath();
  ctx.moveTo(
    event.clientX - canvas.offsetLeft,
    event.clientY - canvas.offsetTop
  );
  event.preventDefault();
}

function draw(event: MouseEvent | TouchEvent) {
  if (isDrawing) {
    ctx.lineTo(
      event.clientX - canvas.offsetLeft,
      event.clientY - canvas.offsetTop
    );
    ctx.strokeStyle = drawColor;
    ctx.lineWidth = drawWidth;
    ctx.lineCap = "round";
    ctx.lineJoin = "round";
    ctx.stroke();
  }
}

function stop() {
  if (isDrawing) {
    ctx.stroke();
    ctx.closePath();
    isDrawing = false;
  }
}
//
const clearBtn = $("#btnClear")!;
clearBtn.addEventListener("click", clearFn);

function clearFn() {
  console.log("clearFn: ", clearFn);
}
