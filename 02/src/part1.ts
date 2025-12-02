export function part1(input: string) {
  const ranges = input.split(',').map((range) => range.split('-').map(Number) as [number, number]);
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

function idIsValid(id: number) {
  const idString = String(id);

  if (idString.length % 2 === 1) {
    return true;
  }

  return idString.slice(0, idString.length / 2) !== idString.slice(idString.length / 2);
}
