export default abstract class Tool {
  protected canvas: HTMLCanvasElement;
  protected ctx: CanvasRenderingContext2D | null;

  constructor(canvas: HTMLCanvasElement) {
    this.canvas = canvas;
    this.ctx = canvas.getContext("2d");
    this.destroyEvents();
  }

  abstract mouseUpHandler(): void;
  abstract mouseDownHandler(event: Event): void;
  abstract mouseMoveHandler(event: Event): void;
  abstract draw(x: number, y: number, radius?: number, height?: number): void;

  listen() {
    this.canvas.onmousemove = this.mouseMoveHandler.bind(this);
    this.canvas.onmousedown = this.mouseDownHandler.bind(this);
    this.canvas.onmouseup = this.mouseUpHandler.bind(this);
  }

  public set strokeColor(color: string) {
    if (!this.ctx) {
      return;
    }
    this.ctx.strokeStyle = color;
  }

  public set lineWidth(width: number) {
    if (!this.ctx) {
      return;
    }
    this.ctx.lineWidth = width;
  }

  private destroyEvents() {
    this.canvas.onmousemove = null;
    this.canvas.onmousedown = null;
    this.canvas.onmouseup = null;
  }
}
