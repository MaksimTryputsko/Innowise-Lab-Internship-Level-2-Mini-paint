import React, { useCallback } from "react";
import styles from "./canvas.module.scss";
import Brush from "tools/Brush";

import { SaveToGallery } from "components/SaveToGallery/SaveToGallery";
import { observer } from "mobx-react-lite";
import canvasState from "store/canvasState";
import toolState from "store/toolState";

const Canvas = observer(() => {
  const ref = useCallback((canvas: HTMLCanvasElement) => {
    if (!canvas) {
      return;
    }
    canvasState.setCanvas(canvas);
    toolState.setTool(new Brush(canvas));
  }, []);

  return (
    <div className={styles.canvas}>
      <canvas ref={ref} width={600} height={400}></canvas>
      <SaveToGallery />
    </div>
  );
});

export { Canvas };
