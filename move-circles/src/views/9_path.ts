import { context, canvas } from "../common";

const data = [
  100,
  200,
  180,
  300,
  270,
  90,
  90,
  20,
  300,
  590,
  300,
  230,
  230,
  480,
];
const startValue = data[0];
const distance = canvas.width / data.length;
const startPoint = 0;
context.lineWidth = 3;
context.strokeStyle = "#f56";
context.beginPath();
context.moveTo(startPoint, startValue);

data.forEach((v, index) => {
  const newDistance = startPoint + distance * (index + 1);
  context.lineTo(newDistance, v);
});

context.lineTo(canvas.width, canvas.height);
context.lineTo(startPoint, canvas.height);
context.lineTo(startPoint, startValue);
context.fillStyle = "pink";
context.fill();
context.stroke();

// context.closePath();
