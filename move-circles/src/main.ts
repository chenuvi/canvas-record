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
  constructor(
    xpos: number,
    ypos: number,
    radius: number,
    color: string,
    text: string
  ) {
    this.xpos = xpos;
    this.ypos = ypos;
    this.radius = radius;
    this.color = color;
    this.text = text;
  }

  draw(context: CanvasRenderingContext2D) {
    context.beginPath();
    context.strokeStyle = this.color;
    context.textAlign = "center";
    context.textBaseline = "middle";

    context.font = "20px Arial";
    context.fillText(this.text, this.xpos, this.ypos);
    context.lineWidth = 5;
    context.arc(this.xpos, this.ypos, this.radius, 0, Math.PI * 2, false);
    context.stroke();
    context.closePath();
  }
}

let circleList = Array(10)
  .fill(0)
  .map((_, index) => {
    let randomX = Math.random() * windowWidth;
    let randomY = Math.random() * windowHeight;
    return createCircle(
      new Circle(randomX, randomY, 50, "black", String(index + 1))
    );
  });
function createCircle(circle: Circle) {
  circle.draw(context);
}

export {};
