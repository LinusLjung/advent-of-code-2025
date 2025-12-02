import { getRanges } from 'getRanges';
import { idIsValid } from 'idIsValid';

export function part2(input: string) {
  const ranges = getRanges(input);
  const invalids: number[] = [];

  for (const [start, end] of ranges) {
    for (let i = start; i <= end; i++) {
      if (!idIsValid(i)) {
        invalids.push(i);
      }
    }
  }

  return invalids.reduce((acc, curr) => acc + curr);
}
