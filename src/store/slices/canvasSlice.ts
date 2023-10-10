import { createSlice } from "@reduxjs/toolkit";
import { IStateCanvas } from "constants/interfacesIState";

const initialState: IStateCanvas = {
  canvas: null,
  tool: null,
  color: "black",
};

const canvasSlices = createSlice({
  name: "canvas",
  initialState,
  reducers: {
    setTool: (state, action) => {
      state.tool = action.payload;
      if (state.tool) {
        state.tool.strokeColor = state.color;
      }
    },
    setCanvas: (state, action) => {
      state.canvas = action.payload;
    },
    setLineWidth(state, action) {
      if (state.tool) {
        state.tool.lineWidth = action.payload;
      }
    },
    setStrokeColor(state, action) {
      if (state.tool) {
        state.color = action.payload;
        state.tool.strokeColor = action.payload;
      }
    },
  },
});

export const { setTool, setCanvas, setLineWidth, setStrokeColor } =
  canvasSlices.actions;
export default canvasSlices.reducer;
