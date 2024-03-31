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
export { $, getDistance };
