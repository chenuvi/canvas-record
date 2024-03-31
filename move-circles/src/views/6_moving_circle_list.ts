import { context } from "../common";
import { Circle } from "../graphical";
import { WINDOW_WIDTH, WINDOW_HEIGHT } from "../constant";
import { getRandomColor } from "../utils";

function createCircle(circle: Circle) {
  circle.drawStoke(context, 2);
}

function getRandomNum(max: number, min: number): number {
  return Math.random() * Math.abs(max - min * 2) + min;
}
const circle_list: Circle[] = [];

for (let i = 0; i < 20; i++) {
  const [max_radius, min_radius] = [50, 10];
  // const temp_radius = ;
  // let radius = temp_radius < min_radius ? min_radius : temp_radius;
  let radius = Math.random() * max_radius;
  if (radius < min_radius) {
    radius = min_radius;
  }
  let circle = new Circle(
    getRandomNum(WINDOW_WIDTH, radius),
    getRandomNum(WINDOW_HEIGHT, radius),
    radius,
    getRandomColor(),
    String(i + 1),
    min_radius / radius
  );
  circle_list.push(circle);
}

function circleRun() {
  context.clearRect(0, 0, WINDOW_WIDTH, WINDOW_HEIGHT);
  requestAnimationFrame(circleRun);

  circle_list.forEach((circle) => {
    createCircle(circle);
    circle.update();
  });
}
circleRun();
