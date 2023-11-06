import React from "react";
import styles from "./settingBar.module.scss";
import { Counter } from "components/shared/Counter/Counter";
import { ColorInput } from "components/shared/ColorInput/ColorInput";
import toolState from "store/toolState";

const SettingBar = () => {
  const onColorChange = (value: string) => {
    toolState.setStrokeColor(value);
  };

  const onSetLineWidthClick = (value: number) => {
    toolState.setLineWidth(value);
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
