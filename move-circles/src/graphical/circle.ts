class Circle {
  xPos: number;
  yPos: number;
  radius: number;
  color: string;
  text?: string;
  constructor(
    xPos: number,
    yPos: number,
    radius: number,
    color: string = "black",
    text?: string
  ) {
    this.xPos = xPos;
    this.yPos = yPos;
    this.radius = radius;
    this.color = color;
    this.text = text;
  }

  drawStoke(ctx: CanvasRenderingContext2D, lineWidth = 5) {
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
}

export default Circle;
