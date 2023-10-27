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
      <ButtonIcon
        image="https://www.shutterstock.com/shutterstock/photos/2110776980/display_1500/stock-photo-paint-brush-with-close-up-view-2110776980.jpg"
        description="brush"
        onClick={onBrushSet}
      />
      <ButtonIcon
        image="https://cdn-icons-png.flaticon.com/512/1827/1827954.png"
        description="eraser"
        onClick={onEraserSet}
      />
      <ButtonIcon
        image="https://img.razrisyika.ru/img/64/253058-podrobnaya-stranica-raskraski-pryamougolnika.jpg"
        description="rectangle"
        onClick={onRectangleSet}
      />
      <ButtonIcon
        image="https://www.svgrepo.com/show/21400/circle-outline.svg"
        description="circle"
        onClick={onCircleSet}
      />
      <ButtonIcon
        image="https://static.thenounproject.com/png/3635576-200.png"
        description="line"
        onClick={onLineSet}
      />
      <ButtonIcon
        image="https://www.svgrepo.com/show/133866/ellipse-outline-shape-variant.svg"
        description="ellipse"
        onClick={onEllipseSet}
      />
      <ButtonIcon
        image="https://static.thenounproject.com/png/1502724-200.png"
        description="star"
        onClick={onStarSet}
      />
      <ButtonIcon
        image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIny06dYR6jm85NXqLm8_1SUchZv-qJcts1g&usqp=CAU"
        description="polygon"
        onClick={onPolygonSet}
      />
    </div>
  );
};

export { Toolbar };
