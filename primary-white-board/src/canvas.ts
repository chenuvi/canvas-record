// init Vars
let initBgColor = "white";
let drawWidth = 2;
let drawColor = "black";
let isDrawing = false;
let restoreArray = [];
let index = -1;

const $ = document.querySelector.bind(document);

const canvas: HTMLCanvasElement = $("#canvas")!;
canvas.width = document.body.clientWidth - 100;
canvas.height = document.body.clientHeight - 200;
// canvas.height = 400;
const ctx = canvas.getContext("2d")!;
ctx.fillStyle = initBgColor;
ctx.fillRect(0, 0, canvas.width, canvas.height);

canvasEvent(canvas);

const btnClear = $("#btnClear")!;
btnClear.addEventListener("click", clear);
const btnUndo = $("#btnUndo")!;
btnUndo.addEventListener("click", undo);

const colors = $("#colors");
colors?.addEventListener("click", (e) => {
  const colorItem = e.target as HTMLElement;
  const bgColor = window
    .getComputedStyle(colorItem, null)
    .getPropertyValue("background-color");
  drawColor = bgColor;
});

const $colorPicker = $("#color-picker")!;
$colorPicker.addEventListener("change", (e) => {
  const val = (e.currentTarget as HTMLInputElement).value;
  drawColor = val;
});

const $penRange = $("#pen-range")!;
$penRange.addEventListener("change", (e) => {
  drawWidth = Number((e.currentTarget as HTMLInputElement).value);
});

function canvasEvent(canvas: HTMLCanvasElement) {
  canvas.addEventListener("mousedown", start, false);

  canvas.addEventListener("mousemove", draw, false);
  canvas.addEventListener("touchmove", draw, false);

  canvas.addEventListener("touchend", stop, false);
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
}

function clear() {
  ctx.fillStyle = initBgColor;
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillRect(0, 0, canvas.width, canvas.height);
}

function undo() {}

export {};
