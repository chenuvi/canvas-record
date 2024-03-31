const $ = document.querySelector.bind(document);

const getDistance = (
  coords1: [number, number],
  coords2: [number, number]
): number => {
  const [x1, y1] = coords1;
  const [x2, y2] = coords2;

  const res = Math.sqrt(Math.pow(x1 - x2, 2) + Math.pow(y1 - y2, 2));

  return res;
};

function getRandomColor(): string {
  const hue = Math.floor(Math.random() * 360); // 色相范围：0到359度
  const saturation = Math.floor(Math.random() * 100) + "%"; // 饱和度范围：0%到100%
  const lightness = Math.floor(Math.random() * 100) + "%"; // 亮度范围：0%到100%

  return `hsl(${hue}, ${saturation}, ${lightness})`;
}
export { $, getDistance, getRandomColor };
