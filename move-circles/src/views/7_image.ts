import { context } from "../common";
import img_bird from "../../static/image/hummingbird.jpg";

import { Image } from "../graphical";

function createImage(
  ctx: CanvasRenderingContext2D,
  imgPath: string,
  xPos: number,
  yPos: number,
  width: number,
  height: number
) {
  let myImage = document.createElement("img");
  myImage.src = imgPath;
  myImage.onload = () => {
    ctx.drawImage(myImage, xPos, yPos, width, height);
  };
}

let image = new Image(img_bird, 50, 50, 100, 100);
createImage(
  context,
  image.imgPath,
  image.xPos,
  image.yPos,
  image.width,
  image.height
);
