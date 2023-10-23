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

  const handleClickSetBrush = () => {
    dispatch(setTool(new Brush(canvas)));
  };

  const handleClickSetRectangle = () => {
    dispatch(setTool(new Rectangle(canvas)));
  };

  const handleClickSetCircle = () => {
    dispatch(setTool(new Circle(canvas)));
  };

  const handleClickSetEraser = () => {
    dispatch(setTool(new Eraser(canvas)));
  };

  const handleClickSetLine = () => {
    dispatch(setTool(new Line(canvas)));
  };

  const handleClickSetEllipse = () => {
    dispatch(setTool(new Ellipse(canvas)));
  };

  const handleClickSetStar = () => {
    dispatch(setTool(new Star(canvas)));
  };

  const handleClickSetPolygon = () => {
    dispatch(setTool(new Polygon(canvas)));
  };

  return (
    <div className={styles.toolbar}>
      <button className={styles.brush} onClick={handleClickSetBrush}></button>
      <button
        className={styles.rectangle}
        onClick={handleClickSetRectangle}></button>
      <button className={styles.circle} onClick={handleClickSetCircle}></button>
      <button className={styles.eraser} onClick={handleClickSetEraser}></button>
      <button className={styles.line} onClick={handleClickSetLine}></button>
      <button
        className={styles.ellipse}
        onClick={handleClickSetEllipse}></button>
      <button className={styles.star} onClick={handleClickSetStar}>
        &#10038;
      </button>
      <button
        className={styles.polygon}
        onClick={handleClickSetPolygon}></button>
    </div>
  );
};

export { Toolbar };
