import "./style.css";
const $ = document.querySelector.bind(document);
const canvas = $("#canvas")! as HTMLCanvasElement,
  context = canvas.getContext("2d")!;
const windowWidth = window.innerWidth;
const windowHeight = window.innerHeight;

canvas.height = windowHeight;
canvas.width = windowWidth;
canvas.style.backgroundColor = "#ff8";
class Circle {
  xpos: number;
  ypos: number;
  radius: number;
  color: string;
  text: string;
  speed: number;
  dx: number;
  dy: number;

  constructor(
    xpos: number,
    ypos: number,
    radius: number,
    color: string,
    text: string,
    speed = 1
  ) {
    this.xpos = xpos;
    this.ypos = ypos;
    this.radius = radius;
    this.color = color;
    this.text = text;
    this.speed = speed;

    this.dx = 1 * this.speed;
    this.dy = 1 * this.speed;
  }

  draw(context: CanvasRenderingContext2D) {
    context.beginPath();
    context.strokeStyle = this.color;
    context.textAlign = "center";
    context.textBaseline = "middle";

    context.font = "20px Arial";
    context.fillText(this.text, this.xpos, this.ypos);
    context.lineWidth = 2;
    context.arc(this.xpos, this.ypos, this.radius, 0, Math.PI * 2, false);
    context.stroke();
    context.closePath();
  }

  update() {
    context.clearRect(0, 0, windowWidth, windowHeight);

    this.draw(context);

    if (this.xpos + this.radius > windowWidth) {
      this.dx = -this.dx;
    }
    if (this.ypos + this.radius > windowHeight) {
      this.dy = -this.dy;
    }
    if (this.xpos - this.radius < 0) {
      this.dx = -this.dx;
    }

    if (this.ypos - this.radius < 0) {
      this.dy = -this.dy;
    }

    this.xpos += this.dx;
    this.ypos += this.dy;
  }
}

let randomX = Math.random() * windowWidth;
let randomY = Math.random() * windowHeight;
let circle = new Circle(randomX, randomY, 50, "black", String(1), 1);
createCircle(circle);

let updateCircle = function () {
  requestAnimationFrame(updateCircle);
  circle.update();
};
updateCircle();

// let circleList = Array(1)
//   .fill(0)
//   .map((_, index) => {
//     let randomX = Math.random() * windowWidth;
//     let randomY = Math.random() * windowHeight;
//     return createCircle(
//       new Circle(randomX, randomY, 50, "black", String(index + 1))
//     );
//   });

function createCircle(circle: Circle) {
  circle.draw(context);
}

export {};
