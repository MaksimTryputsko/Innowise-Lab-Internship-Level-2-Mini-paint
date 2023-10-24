import React from "react";
import styles from "./toolbar.module.scss";
import { useDispatch } from "react-redux";
import Brush from "tools/Brush";
import { setTool } from "store/slices/canvasSlice";
import Rectangle from "tools/Rectangle";
import Circle from "tools/Circle";
import Eraser from "tools/Eraser";
import Line from "tools/Line";
import Ellipse from "tools/Ellipse";
import Star from "tools/Star";
import Polygon from "tools/Polygon";
import { useAppSelector } from "hooks/useAppSelector";

const Toolbar = () => {
  const { canvas } = useAppSelector(state => state.canvas);
  const dispatch = useDispatch();

  if (!canvas) {
    return null;
  }

  const onBrushSet = () => {
    dispatch(setTool(new Brush(canvas)));
  };

  const onRectangleSet = () => {
    dispatch(setTool(new Rectangle(canvas)));
  };

  const onCircleSet = () => {
    dispatch(setTool(new Circle(canvas)));
  };

  const onEraserSet = () => {
    dispatch(setTool(new Eraser(canvas)));
  };

  const onLineSet = () => {
    dispatch(setTool(new Line(canvas)));
  };

  const onEllipseSet = () => {
    dispatch(setTool(new Ellipse(canvas)));
  };

  const onStarSet = () => {
    dispatch(setTool(new Star(canvas)));
  };

  const onPolygonSet = () => {
    dispatch(setTool(new Polygon(canvas)));
  };

  return (
    <div className={styles.toolbar}>
      <button className={styles.brush} onClick={onBrushSet}></button>
      <button className={styles.rectangle} onClick={onRectangleSet}></button>
      <button className={styles.circle} onClick={onCircleSet}></button>
      <button className={styles.eraser} onClick={onEraserSet}></button>
      <button className={styles.line} onClick={onLineSet}></button>
      <button className={styles.ellipse} onClick={onEllipseSet}></button>
      <button className={styles.star} onClick={onStarSet}>
        &#10038;
      </button>
      <button className={styles.polygon} onClick={onPolygonSet}></button>
    </div>
  );
};

export { Toolbar };
