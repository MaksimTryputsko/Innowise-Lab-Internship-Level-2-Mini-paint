import Tool from "./Tool";

export default class Line extends Tool {
  mouseDown: boolean;
  currentX: number;
  currentY: number;
  saved: string;

  constructor(canvas: HTMLCanvasElement) {
    super(canvas);
    this.listen();
    this.mouseDown = false;
    this.currentX = 0;
    this.currentY = 0;
    this.saved = "";
  }

  listen() {
    this.canvas.onmousedown = this.mouseDownHandler.bind(this);
    this.canvas.onmouseup = this.mouseUpHandler.bind(this);
    this.canvas.onmousemove = this.mouseMoveHandler.bind(this);
  }

  mouseDownHandler(e: MouseEvent) {
    if (!this.ctx) {
      return;
    }
    this.mouseDown = true;
    this.currentX = e.pageX - (e.target as HTMLElement).offsetLeft;
    this.currentY = e.pageY - (e.target as HTMLElement).offsetTop;
    this.ctx.beginPath();
    this.ctx.moveTo(this.currentX, this.currentY);
    this.saved = this.canvas.toDataURL();
  }

  mouseUpHandler() {
    this.mouseDown = false;
  }

  mouseMoveHandler(e: MouseEvent) {
    if (!this.mouseDown) {
      return;
    }
    this.draw(
      e.pageX - (e.target as HTMLElement).offsetLeft,
      e.pageY - (e.target as HTMLElement).offsetTop,
    );
  }

  draw(x: number, y: number) {
    const img = new Image();
    img.src = this.saved;
    img.onload = async () => {
      if (!this.ctx) {
        return;
      }
      this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
      this.ctx.drawImage(img, 0, 0, this.canvas.width, this.canvas.height);
      this.ctx.beginPath();
      this.ctx.moveTo(this.currentX, this.currentY);
      this.ctx.lineTo(x, y);
      this.ctx.stroke();
    };
  }
}
