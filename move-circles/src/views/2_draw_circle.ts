import { context } from "../common";
import { Circle } from "../graphical";
import { WINDOW_WIDTH, WINDOW_HEIGHT } from "../constant";
import { getDistance } from "../utils";

let circle1 = new Circle(50, 50, 50, "#c00", "A", 0.5);
let circle2 = new Circle(400, 300, 270, "#000", "B", 0);

createCircle(circle1);
createCircle(circle2);
function circleRun() {
  context.clearRect(0, 0, WINDOW_WIDTH, WINDOW_HEIGHT);
  requestAnimationFrame(circleRun);
  circle1.update();
  circle2.update();
  if (
    getDistance(circle1.xPos, circle1.yPos, circle2.xPos, circle2.yPos) <=
    circle2.radius + circle1.radius
  ) {
    circle2.color = "green";
  } else {
    circle2.color = "#000";
  }
}
circleRun();

function createCircle(circle: Circle) {
  circle.drawStoke(context, 3);
}
// const circleList = [];

// createCircle(circle);
// for (let i = 0; i < 20; i++) {
//   let circle = new Circle(
//     WINDOW_WIDTH * Math.random(),
//     WINDOW_HEIGHT * Math.random(),
//     50,
//     "#c00",
//     String(i + 1),
//     1
//   );
//   circleList.push(circle);
//   crateCircle(circleList[i]);
// }
