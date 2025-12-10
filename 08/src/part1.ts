import { Box } from 'Box';
import { makePair } from 'makePair';

export function part1(input: string, iterations: number) {
  const boxes = input.split('\n').map((row) => new Box(...(row.split(',').map(Number) as [number, number, number])));
  const circuits: Box[][] = [];

  for (let i = 0; i < iterations; i++) {
    makePair(boxes, circuits);
  }

  return circuits
    .toSorted((a, b) => b.length - a.length)
    .slice(0, 3)
    .reduce((acc, curr) => acc * curr.length, 1);
}
