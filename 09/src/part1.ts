type Point = [x: number, y: number];

export function part1(input: string) {
  const points = input.split('\n').map((line) => line.split(',').map(Number) as Point);
  let biggestArea = 0;

  for (let i = 0; i < points.length - 1; i++) {
    const [x1, y1] = points[i];
    for (let j = i + 1; j < points.length; j++) {
      const [x2, y2] = points[j];
      const area = (Math.abs(x2 - x1) + 1) * (Math.abs(y2 - y1) + 1);

      biggestArea = Math.max(biggestArea, area);
    }
  }

  return biggestArea;
}
