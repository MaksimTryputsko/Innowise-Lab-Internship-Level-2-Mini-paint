import React, { useCallback } from "react";
import styles from "./canvas.module.scss";
import { useDispatch } from "react-redux";
import { setCanvas } from "store/slices/canvasSlice";
import Brush from "tools/Brush";
import { setTool } from "../../../store/slices/canvasSlice";

import { SaveToGallery } from "components/SaveToGallery/SaveToGallery";

const Canvas = () => {
  const dispatch = useDispatch();
  const ref = useCallback((canvas: HTMLCanvasElement) => {
    dispatch(setCanvas(canvas));
    dispatch(setTool(new Brush(canvas)));
  }, []);

  return (
    <div className={styles.canvas}>
      <canvas ref={ref} width={600} height={400}></canvas>
      <SaveToGallery />
    </div>
  );
};

export { Canvas };
