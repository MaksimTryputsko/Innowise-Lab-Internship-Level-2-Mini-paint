import React from "react";
import styles from "./settingBar.module.scss";
import { useDispatch } from "react-redux";
import { setLineWidth, setStrokeColor } from "store/slices/canvasSlice";
import { Counter } from "components/shared/Counter/Counter";

import { ColorInput } from "components/shared/ColorInput/ColorInput";

const SettingBar = () => {
  const dispatch = useDispatch();

  const onColorChange = (value: string) => {
    dispatch(setStrokeColor(value));
  };

  const onSetLineWidthClick = (value: number) => {
    dispatch(setLineWidth(value));
  };

  return (
    <div className={styles.settingBar}>
      <div className={styles.countBlock}>
        <span>Set line width:</span>
        <Counter onClick={onSetLineWidthClick} />
      </div>
      <div>
        <span>Set color:</span>
        <ColorInput onChange={onColorChange} />
      </div>
    </div>
  );
};

export { SettingBar };
