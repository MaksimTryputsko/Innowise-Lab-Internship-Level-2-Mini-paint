import React, { useState } from "react";
import { MuiColorInput } from "mui-color-input";

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
      sx={{ width: "200px", height: "10px" }}
    />
  );
};

export { ColorInput };
