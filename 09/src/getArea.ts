import type { Point } from 'types';

export function getArea([x1, y1]: Point, [x2, y2]: Point) {
  return (Math.abs(x2 - x1) + 1) * (Math.abs(y2 - y1) + 1);
}
