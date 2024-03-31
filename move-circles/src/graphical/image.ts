class Image {
  imgPath: string;
  xPos: number;
  yPos: number;
  width: number;
  height: number;
  constructor(
    imgPath: string,
    xPos: number,
    yPos: number,
    width: number,
    height: number
  ) {
    this.imgPath = imgPath;
    this.xPos = xPos;
    this.yPos = yPos;
    this.width = width;
    this.height = height;
  }

  
}

export default Image;
