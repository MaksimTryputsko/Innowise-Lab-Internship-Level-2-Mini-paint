import React from "react";
import { Toolbar } from "./Toolbar/Toolbar";
import { SettingBar } from "./SettingBar/SettingBar";
import { Canvas } from "./Canvas/Canvas";

const MiniPaint = () => {
  return (
    <div>
      <Toolbar />
      <SettingBar />
      <Canvas />
    </div>
  );
};

export { MiniPaint };
