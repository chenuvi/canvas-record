import { context } from "../common";
import { Circle } from "../graphical";
import { WINDOW_WIDTH, WINDOW_HEIGHT } from "../constant";

let circle = new Circle(
  WINDOW_WIDTH * Math.random(),
  WINDOW_HEIGHT * Math.random(),
  50,
  "#c00",
  String(1),
  1
);

createCircle(circle);
function circleRun() {
  requestAnimationFrame(circleRun);
  circle.update();
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
