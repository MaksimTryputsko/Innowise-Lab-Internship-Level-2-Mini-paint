import Tool from "./Tool";

export default class Brush extends Tool {
  mouseDown: boolean;

  constructor(canvas: HTMLCanvasElement) {
    super(canvas);
    this.listen();
    this.mouseDown = false;
  }

  listen() {
    this.canvas.onmousemove = this.mouseMoveHandler.bind(this);
    this.canvas.onmousedown = this.mouseDownHandler.bind(this);
    this.canvas.onmouseup = this.mouseUpHandler.bind(this);
  }

  mouseUpHandler() {
    this.mouseDown = false;
  }

  mouseDownHandler(e: MouseEvent) {
    if (!this.ctx) {
      return;
    }
    this.mouseDown = true;
    this.ctx.beginPath();
    this.ctx.moveTo(
      e.pageX - (e.target as HTMLElement)?.offsetLeft,
      e.pageY - (e.target as HTMLElement)?.offsetTop,
    );
  }

  mouseMoveHandler(e: MouseEvent) {
    if (!this.mouseDown) {
      return;
    }
    this.draw(
      e.pageX - (e.target as HTMLElement)?.offsetLeft,
      e.pageY - (e.target as HTMLElement)?.offsetTop,
    );
  }

  draw(x: number, y: number) {
    if (!this.ctx) {
      return;
    }
    this.ctx.lineTo(x, y);
    this.ctx.stroke();
  }
}
