import { context } from "../common";
import { Circle } from "../graphical";
import { WINDOW_WIDTH, WINDOW_HEIGHT } from "../constant";

let circleList = [];
let crateCircle = function (circle: Circle) {
  circle.drawStoke(context, 3);
};

for (let i = 0; i < 20; i++) {
  let circle = new Circle(
    WINDOW_WIDTH * Math.random(),
    WINDOW_HEIGHT * Math.random(),
    50,
    "#c00",
    String(i + 1)
  );
  circleList.push(circle);
  crateCircle(circleList[i]);
}
