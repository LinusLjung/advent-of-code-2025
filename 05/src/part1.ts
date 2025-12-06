function idIsInRange(id: number, [min, max]: [number, number]) {
  return id >= min && id <= max;
}

export function part1(input: string) {
  const [rangesChunk, idsChunk] = input.split('\n\n');

  const ranges = rangesChunk.split('\n').map((row) => row.split('-').map(Number) as [number, number]);
  const ids = idsChunk.split('\n').map((id) => Number(id));

  let sum = 0;

  for (const id of ids) {
    for (const range of ranges) {
      if (idIsInRange(id, range)) {
        sum++;
        break;
      }
    }
  }

  return sum;
}
