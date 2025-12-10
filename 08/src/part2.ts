import type { Box } from 'Box';
import { getBoxes } from 'getBoxes';
import { makePair } from 'makePair';

export function part2(input: string) {
  const boxes = getBoxes(input);
  const circuits = boxes.map((box) => [box]);

  let lastBox = 0;

  while (circuits.length > 1) {
    lastBox = makePair(boxes, circuits);
  }

  return lastBox;
}
