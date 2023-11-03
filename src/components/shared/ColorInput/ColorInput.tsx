import React, { useState } from "react";
import { MuiColorInput } from "mui-color-input";
import styles from "./colorInput.module.scss";

interface IPropsColorInput {
  onChange: (value: string) => void;
}

const ColorInput = ({ onChange }: IPropsColorInput) => {
  const [color, setColor] = useState("rgb(0, 0, 0)");

  const onColorChange = (color: string) => {
    setColor(color);
    onChange(color);
  };

  return (
    <MuiColorInput
      value={color}
      onChange={onColorChange}
      className={styles.size}
    />
  );
};

export { ColorInput };
