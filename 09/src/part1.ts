import { getArea } from 'getArea';
import type { Point } from 'types';

export function part1(input: string) {
  const points = input.split('\n').map((line) => line.split(',').map(Number) as Point);
  let biggestArea = 0;

  for (let i = 0; i < points.length - 1; i++) {
    const p1 = points[i];
    for (let j = i + 1; j < points.length; j++) {
      const p2 = points[j];
      const area = getArea(p1, p2);

      biggestArea = Math.max(biggestArea, area);
    }
  }

  return biggestArea;
}
