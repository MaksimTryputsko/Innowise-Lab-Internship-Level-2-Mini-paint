export interface ITool {
  canvas: HTMLCanvasElement;
  ctx: CanvasRenderingContext2D;
  lineWidth: string;
  strokeColor: string;
}

export interface IStateCanvas {
  canvas: HTMLCanvasElement | null;
  tool: ITool | null;
  color: string;
}

interface IStateUser {
  email: string;
  id: string;
}

export interface IStateImages {
  image: string;
  id: string;
  email: string;
  datePublication: string;
}
interface IStateImagesCollection {
  isLoading: boolean;
  images: IStateImages[];
  users: string[];
}

export interface IState {
  canvas: IStateCanvas;
  user: IStateUser;
  imagesCollection: IStateImagesCollection;
}
