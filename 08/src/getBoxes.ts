import { Box } from 'Box';

export function getBoxes(input: string) {
  return input.split('\n').map((row) => new Box(...(row.split(',').map(Number) as [number, number, number])));
}
