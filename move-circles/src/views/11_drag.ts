import { context, canvas } from "../common";

const [canvasWidth, canvasHeight] = [canvas.width, canvas.height];

type Shape = {
  x: number;
  y: number;
  width: number;
  height: number;
  color: string;
};
canvas.style.border = "5px solid #a0a";

const shapeList: Shape[] = [];
let currentShapeIndex: number | undefined = undefined;
let isDragging = false;
let startX = 0,
  startY = 0;
shapeList.push(
  {
    x: 200,
    y: 50,
    width: 200,
    height: 200,
    color: "#a0a",
  },
  {
    x: 400,
    y: 300,
    width: 50,
    height: 100,
    color: "red",
  }
);

function drawShapes() {
  context.clearRect(0, 0, canvasWidth, canvasHeight);
  shapeList.forEach((shape) => {
    context.fillStyle = shape.color;
    context.fillRect(shape.x, shape.y, shape.width, shape.height);
  });
}

function isMousedownInShape(x: number, y: number, shape: Shape): boolean {
  const [shapeLeft, shapeRight, shapeTop, shapeBottom] = [
    shape.x,
    shape.x + shape.width,
    shape.y,
    shape.y + shape.height,
  ];
  if (x > shapeLeft && x < shapeRight && y > shapeTop && y < shapeBottom) {
    return true;
  } else {
    return false;
  }
}

const onMousedown = (event: MouseEvent) => {
  event.preventDefault();
  [startX, startY] = [event.clientX, event.clientY];
  shapeList.forEach((shape, index) => {
    if (isMousedownInShape(startX, startY, shape)) {
      currentShapeIndex = index;
      isDragging = true;
      return;
    }
  });
};

const onMouseup = (event: MouseEvent) => {
  if (!isDragging) {
    return;
  }
  event.preventDefault();
  isDragging = false;
};

const onMousemove = (event: MouseEvent) => {
  if (!isDragging) return;
  const [mouseX, mouseY] = [event.clientX, event.clientY];
  let [dx, dy] = [mouseX - startX, mouseY - startY];
  const currentShape = shapeList[currentShapeIndex!];
  currentShape.x += dx;
  currentShape.y += dy;
  drawShapes();
  startX = mouseX;
  startY = mouseY;
};

canvas.onmousedown = onMousedown;
canvas.onmouseup = onMouseup;
canvas.onmouseout = onMouseup;
canvas.onmousemove = onMousemove;

drawShapes();
