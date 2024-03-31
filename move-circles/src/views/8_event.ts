import { context, canvas } from "../common";
import { Circle } from "../graphical";

const circleColor = "#f56";
let circle = new Circle(200, 200, 100, circleColor);
const drawCircle = () => circle.drawFill(context, 3);
drawCircle();

canvas.addEventListener("click", (event) => {
  const rect = canvas.getBoundingClientRect();
  const [x, y] = [event.clientX - rect.left, event.clientY - rect.top];
  if (circle.isClicked(x, y)) {
    circle.changeColor("#56f");
    drawCircle();
  } else {
    circle.changeColor(circleColor);
    drawCircle();
  }
});
