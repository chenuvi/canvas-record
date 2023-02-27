import "./style.css";
// canvas 工具样式
import "./container.css";
import { canvasEvent } from "./canvas";

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
  <div class="container">
  <canvas id="canvas"></canvas>
  <div class="tools">
    <button type="button" class="button">Undo</button>
    <button type="button" class="button" onClick="clear()">Clear</button>

    <div class="colors">
      <div class="color-field" style="background-color: black"></div>
      <div class="color-field" style="background-color: red"></div>
      <div class="color-field" style="background-color: blue"></div>
      <div class="color-field" style="background-color: green"></div>
      <div class="color-field" style="background-color: yellow"></div>
    </div>

    <input type="color" class="color-picker">
    <input type="range" min="0.5" max="20" class="pen-range">
  </div>
  </div>
`;

canvasEvent(document.querySelector<HTMLCanvasElement>("#canvas")!);
