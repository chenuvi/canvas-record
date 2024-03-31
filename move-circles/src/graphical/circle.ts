import { WINDOW_HEIGHT, WINDOW_WIDTH } from "../constant";
import { getDistance } from "../utils";
// import { getRandomColor } from "../utils";
class Circle {
  xPos: number;
  yPos: number;
  radius: number;
  color: string;
  text?: string;
  speed?: number;
  private dx?: number;
  private dy?: number;
  ctx?: CanvasRenderingContext2D;
  stokeLineWidth?: number;
  constructor(
    xPos: number,
    yPos: number,
    radius: number,
    color: string = "black",
    text?: string,
    speed?: number
  ) {
    // this.xPos = xPos;
    this.xPos = xPos;
    this.yPos = yPos;
    this.radius = radius;
    this.color = color;
    this.text = text;
    this.speed = speed;

    if (this.speed !== undefined) {
      this.dx = 1 * this.speed;
      this.dy = 1 * this.speed;
    }
  }

  drawStoke(ctx: CanvasRenderingContext2D, lineWidth = 5) {
    this.ctx = ctx;
    ctx.beginPath();
    if (this.text) {
      ctx.strokeStyle = this.color;
      ctx.font = "15px Arial";
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.fillText(this.text, this.xPos, this.yPos);
      // ctx.strokeText(this.text, this.xPos, this.yPos);
    }
    this.stokeLineWidth = lineWidth;
    ctx.lineWidth = this.stokeLineWidth;
    ctx.arc(this.xPos, this.yPos, this.radius, 0, Math.PI * 2, false);
    ctx.stroke();
    ctx.closePath();
  }

  drawFill(ctx: CanvasRenderingContext2D, lineWidth = 5) {
    ctx.beginPath();
    ctx.arc(this.xPos, this.yPos, this.radius, 0, Math.PI * 2, false);
    ctx.strokeStyle = "grey";
    ctx.lineWidth = lineWidth;
    ctx.fillStyle = this.color;
    ctx.fill();
    // ctx.stroke();
    ctx.closePath();
  }

  update() {
    if (!this.ctx) return;
    this.drawStoke(this.ctx, this.stokeLineWidth);
    if (this.xPos + this.radius > WINDOW_WIDTH || this.xPos - this.radius < 0) {
      this.dx = -this.dx!;
      // this.color = getRandomColor();
    }
    if (
      this.yPos + this.radius > WINDOW_HEIGHT ||
      this.yPos - this.radius < 0
    ) {
      this.dy = -this.dy!;
      // this.color = getRandomColor();
    }
    this.xPos += this.dx!;
    this.yPos += this.dy!;
  }

  isClicked(xMouse: number, yMouse: number): boolean {
    const distance = getDistance([xMouse, yMouse], [this.xPos, this.yPos]);
    if (distance <= this.radius) {
      return true;
    } else {
      return false;
    }
  }

  changeColor(color: string) {
    this.color = color;
  }
}

export default Circle;
