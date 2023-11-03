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

export interface IImage {
  image: string;
  id: string;
  email: string;
  publicationDate: string;
}
