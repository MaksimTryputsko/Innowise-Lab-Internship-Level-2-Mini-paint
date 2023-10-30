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
import { ButtonIcon } from "components/shared/ButtonIcon/ButtonIcon";
import { BrushIcon } from "components/icons/Brush";
import { EraserIcon } from "components/icons/Eraser";
import { CircleIcon } from "components/icons/Circle";
import { LineIcon } from "components/icons/Line";
import { EllipseIcon } from "components/icons/Ellipse";
import { PolygonIcon } from "components/icons/Polygon";
import { RectangleIcon } from "components/icons/Rectangle";
import { StarIcon } from "components/icons/Star";

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
      <ButtonIcon onClick={onBrushSet}>
        <BrushIcon />
      </ButtonIcon>
      <ButtonIcon onClick={onEraserSet}>
        <EraserIcon />
      </ButtonIcon>
      <ButtonIcon onClick={onRectangleSet}>
        <RectangleIcon />
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
