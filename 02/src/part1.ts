import { getRanges } from 'getRanges';

export function part1(input: string) {
  const ranges = getRanges(input);
  const invalids: number[] = [];

  for (const [start, end] of ranges) {
    for (let i = Number(start); i <= Number(end); i++) {
      if (!idIsValid(i)) {
        invalids.push(i);
      }
    }
  }

  return invalids.reduce((acc, curr) => acc + curr);
}

function idIsValid(id: number) {
  const idString = String(id);

  if (idString.length % 2 === 1) {
    return true;
  }

  return idString.slice(0, idString.length / 2) !== idString.slice(idString.length / 2);
}
