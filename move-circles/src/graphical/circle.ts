import { WINDOW_HEIGHT, WINDOW_WIDTH } from "../constant";
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

    if (this.speed) {
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
    ctx.lineWidth = lineWidth;
    ctx.arc(this.xPos, this.yPos, this.radius, 0, Math.PI * 2, false);
    ctx.stroke();
    ctx.closePath();
  }

  update() {
    if (!this.ctx) return;
    this.ctx.clearRect(0, 0, WINDOW_WIDTH, WINDOW_HEIGHT);
    this.drawStoke(this.ctx);
    if (this.xPos + this.radius > WINDOW_WIDTH || this.xPos - this.radius < 0) {
      this.dx = -this.dx!;
    }
    if (
      this.yPos + this.radius > WINDOW_HEIGHT ||
      this.yPos - this.radius < 0
    ) {
      this.dy = -this.dy!;
    }
    this.xPos += this.dx!;
    this.yPos += this.dy!;
  }
}

export default Circle;
