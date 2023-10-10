import React, { useState } from "react";
import styles from "./settingBar.module.scss";
import { useDispatch } from "react-redux";
import { setLineWidth, setStrokeColor } from "store/slices/canvasSlice";

const SettingBar = () => {
  const [count, setCount] = useState(1);
  const dispatch = useDispatch();

  const changeColor = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e) {
      dispatch(setStrokeColor(e.target?.value));
    }
  };

  const handleClickPlus = () => {
    if (count < 50) {
      setCount(count + 1);
      dispatch(setLineWidth(count));
    }
  };

  const handleClickMinus = () => {
    if (count > 1) {
      setCount(count - 1);
      dispatch(setLineWidth(count));
    }
  };

  return (
    <div className={styles.settingBar}>
      <div className={styles.countBlock}>
        <span>Set line width:</span>
        <div className={styles.countLineWidth}>
          <button onClick={handleClickMinus}>-</button>
          <span>{count}</span>
          <button onClick={handleClickPlus}>+</button>
        </div>
      </div>
      <div>
        <span>Set color:</span>
        <input onChange={changeColor} type="color" />
      </div>
    </div>
  );
};

export { SettingBar };
