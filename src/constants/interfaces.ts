export interface ITool {
  canvas: HTMLCanvasElement;
  ctx: CanvasRenderingContext2D;
  lineWidth: string;
  strokeColor: string;
}

export interface ICanvas {
  canvas: HTMLCanvasElement | null;
  tool: ITool | null;
  color: string;
}

export interface IImages {
  image: string;
  id: string;
  email: string;
  datePublication: string;
}
