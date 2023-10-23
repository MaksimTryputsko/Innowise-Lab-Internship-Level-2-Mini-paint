import { createSlice } from "@reduxjs/toolkit";
import { ICanvas } from "constants/interfaces";

const initialState: ICanvas = {
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
      if (!state.tool) {
        return;
      }
      state.tool.strokeColor = state.color;
    },
    setCanvas: (state, action) => {
      state.canvas = action.payload;
    },
    setLineWidth(state, action) {
      if (!state.tool) {
        return;
      }
      state.tool.lineWidth = action.payload;
    },
    setStrokeColor(state, action) {
      if (!state.tool) {
        return;
      }
      state.color = action.payload;
      state.tool.strokeColor = action.payload;
    },
  },
});

export const { setTool, setCanvas, setLineWidth, setStrokeColor } =
  canvasSlices.actions;
export default canvasSlices.reducer;
