import Tool from "./Tool";

export default class Ellipse extends Tool {
  mouseDown: boolean;
  startX: number;
  startY: number;
  saved: string;

  constructor(canvas: HTMLCanvasElement) {
    super(canvas);
    this.listen();
    this.mouseDown = false;
    this.startX = 0;
    this.startY = 0;
    this.saved = "";
  }

  listen() {
    this.canvas.onmousemove = this.mouseMoveHandler.bind(this);
    this.canvas.onmousedown = this.mouseDownHandler.bind(this);
    this.canvas.onmouseup = this.mouseUpHandler.bind(this);
  }

  mouseDownHandler(e: MouseEvent) {
    if (!this.ctx) {
      return;
    }

    this.mouseDown = true;
    const canvasData = this.canvas.toDataURL();
    this.ctx.beginPath();
    this.startX = e.pageX - (e.target as HTMLElement).offsetLeft;
    this.startY = e.pageY - (e.target as HTMLElement).offsetTop;
    this.saved = canvasData;
  }

  mouseUpHandler() {
    this.mouseDown = false;
  }

  mouseMoveHandler(e: MouseEvent) {
    if (!this.mouseDown) {
      return;
    }
    const curentX = e.pageX - (e.target as HTMLElement).offsetLeft;
    const curentY = e.pageY - (e.target as HTMLElement).offsetTop;
    const width = curentX - this.startX;
    const height = curentY - this.startY;

    if (Math.abs(height) > Math.abs(width)) {
      const radiusX = Math.sqrt(width ** 2 + height ** 2) / 2;
      const radiusY = Math.sqrt(width ** 2 + height ** 2);
      this.draw(this.startX, this.startY, radiusX, radiusY);
    }
    if (Math.abs(height) < Math.abs(width)) {
      const radiusX = Math.sqrt(width ** 2 + height ** 2);
      const radiusY = Math.sqrt(width ** 2 + height ** 2) / 2;
      this.draw(this.startX, this.startY, radiusX, radiusY);
    }
  }

  draw(x: number, y: number, radiusX: number, radiusY: number) {
    const img = new Image();
    img.src = this.saved;
    img.onload = async () => {
      if (!this.ctx) {
        return;
      }
      this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
      this.ctx.drawImage(img, 0, 0, this.canvas.width, this.canvas.height);
      this.ctx.beginPath();
      this.ctx.ellipse(x, y, radiusX, radiusY, 0, 0, Math.PI * 2);
      this.ctx.stroke();
    };
  }
}
