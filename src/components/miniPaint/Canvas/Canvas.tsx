import React, { useEffect, useRef } from "react";
import styles from "./canvas.module.scss";
import { useDispatch } from "react-redux";
import { setCanvas } from "store/slices/canvasSlice";
import Brush from "tools/Brush";
import { setTool } from "../../../store/slices/canvasSlice";

import { SaveToGallery } from "components/SaveToGallery/SaveToGallery";

const Canvas = () => {
  const canvasRef = useRef(null);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!canvasRef.current) {
      return;
    }
    dispatch(setCanvas(canvasRef.current));
    dispatch(setTool(new Brush(canvasRef.current)));
  }, []);

  return (
    <div className={styles.canvas}>
      <canvas ref={canvasRef} width={600} height={400}></canvas>
      <SaveToGallery />
    </div>
  );
};

export { Canvas };
