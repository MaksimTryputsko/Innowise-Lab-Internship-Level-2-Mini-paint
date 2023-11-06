import authState from "./authState";
import canvasState from "./canvasState";
import imagesState from "./imagesState";
import toolState from "./toolState";

class RootStore {
  canvas = canvasState;
  tool = toolState;
  auth = authState;
  imagesCollection = imagesState;
}

export default RootStore;
