import Tool from "./Tool";

export default class Brush extends Tool {
  mouseDown: boolean;

  constructor(canvas: HTMLCanvasElement) {
    super(canvas);
    super.listen();
    this.mouseDown = false;
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
