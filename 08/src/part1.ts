import { Box } from 'Box';
import { getBoxes } from 'getBoxes';
import { makePair } from 'makePair';

export function part1(input: string, iterations: number) {
  const boxes = getBoxes(input);
  const circuits = boxes.map(box => [box]);

  for (let i = 0; i < iterations; i++) {
    makePair(boxes, circuits);
  }

  return circuits
    .toSorted((a, b) => b.length - a.length)
    .slice(0, 3)
    .reduce((acc, curr) => acc * curr.length, 1);
}
