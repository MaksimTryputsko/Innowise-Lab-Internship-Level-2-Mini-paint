import { makeAutoObservable } from "mobx";
import Tool from "tools/Tool";

class ToolState {
  tool: Tool | null = null;

  constructor() {
    makeAutoObservable(this);
  }

  setTool(tool: Tool) {
    this.tool = tool;
  }

  setStrokeColor(color: string) {
    if (!this.tool) {
      return null;
    }
    this.tool.strokeColor = color;
  }

  setLineWidth(value: number) {
    if (!this.tool) {
      return;
    }
    this.tool.lineWidth = value;
  }
}

export default new ToolState();
