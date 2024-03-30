import { $ } from "../utils";
import { WINDOW_HEIGHT, WINDOW_WIDTH, BG_COLOR } from "../constant";
const canvas = $("#canvas")! as HTMLCanvasElement,
  context = canvas.getContext("2d")!;

canvas.height = WINDOW_HEIGHT;
canvas.width = WINDOW_WIDTH;
canvas.style.backgroundColor = BG_COLOR;

export { canvas, context };
