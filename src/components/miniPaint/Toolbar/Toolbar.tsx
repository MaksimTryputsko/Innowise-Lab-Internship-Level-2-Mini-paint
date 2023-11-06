import React from "react";
import styles from "./toolbar.module.scss";
import Brush from "tools/Brush";
import Rectangle from "tools/Rectangle";
import Circle from "tools/Circle";
import Eraser from "tools/Eraser";
import Line from "tools/Line";
import Ellipse from "tools/Ellipse";
import Star from "tools/Star";
import Polygon from "tools/Polygon";
import { ButtonIcon } from "components/shared/ButtonIcon/ButtonIcon";

import { ReactComponent as BrushIcon } from "icons/brush.svg";
import { ReactComponent as EllipseIcon } from "icons/ellipse.svg";
import { ReactComponent as PolygonIcon } from "icons/polygon.svg";
import { ReactComponent as StarIcon } from "icons/star.svg";
import { ReactComponent as CircleIcon } from "icons/circle.svg";
import { ReactComponent as EraserIcon } from "icons/eraser.svg";
import { ReactComponent as RectanglesIcon } from "icons/rect.svg";
import { ReactComponent as LineIcon } from "icons/line.svg";
import canvasState from "store/canvasState";
import { useStores } from "hooks/useStores";

const Toolbar = () => {
  const { tool } = useStores();

  const onBrushSet = () => {
    if (!canvasState.canvas) {
      return;
    }
    tool.setTool(new Brush(canvasState.canvas));
  };

  const onRectangleSet = () => {
    if (!canvasState.canvas) {
      return;
    }
    tool.setTool(new Rectangle(canvasState.canvas));
  };

  const onCircleSet = () => {
    if (!canvasState.canvas) {
      return;
    }
    tool.setTool(new Circle(canvasState.canvas));
  };

  const onEraserSet = () => {
    if (!canvasState.canvas) {
      return;
    }
    tool.setTool(new Eraser(canvasState.canvas));
  };

  const onLineSet = () => {
    if (!canvasState.canvas) {
      return;
    }
    tool.setTool(new Line(canvasState.canvas));
  };

  const onEllipseSet = () => {
    if (!canvasState.canvas) {
      return;
    }
    tool.setTool(new Ellipse(canvasState.canvas));
  };

  const onStarSet = () => {
    if (!canvasState.canvas) {
      return;
    }
    tool.setTool(new Star(canvasState.canvas));
  };

  const onPolygonSet = () => {
    if (!canvasState.canvas) {
      return;
    }
    tool.setTool(new Polygon(canvasState.canvas));
  };

  return (
    <div className={styles.toolbar}>
      <ButtonIcon onClick={onBrushSet}>
        <BrushIcon />
      </ButtonIcon>
      <ButtonIcon onClick={onEraserSet}>
        <EraserIcon />
      </ButtonIcon>
      <ButtonIcon onClick={onRectangleSet}>
        <RectanglesIcon />
      </ButtonIcon>
      <ButtonIcon onClick={onCircleSet}>
        <CircleIcon />
      </ButtonIcon>
      <ButtonIcon onClick={onLineSet}>
        <LineIcon />
      </ButtonIcon>
      <ButtonIcon onClick={onEllipseSet}>
        <EllipseIcon />
      </ButtonIcon>
      <ButtonIcon onClick={onStarSet}>
        <StarIcon />
      </ButtonIcon>
      <ButtonIcon onClick={onPolygonSet}>
        <PolygonIcon />
      </ButtonIcon>
    </div>
  );
};

export { Toolbar };
