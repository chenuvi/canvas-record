export function canvasEvent(canvas: HTMLCanvasElement) {
  canvas.width = window.innerWidth - 60;
  canvas.height = 400;
  const ctx = canvas.getContext("2d")!;
  ctx.fillStyle = "white";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  let drawColor = "black";
  let drawWidth = 2;
  let isDrawing = false;

  canvas.addEventListener("touchstart", start, false);
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
}
