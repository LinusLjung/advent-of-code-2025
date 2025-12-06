export function part2(input: string) {
  let min = 0;
  let sum = 0;

  const ranges = input
    .split('\n\n')[0]
    .split('\n')
    .map((row) => row.split('-').map(Number) as [number, number])
    .toSorted(([a], [b]) => a - b);

  for (const range of ranges) {
    sum += Math.max(range[1] - Math.max(min, range[0]) + 1, 0);
    min = Math.max(min, range[1] + 1);
  }

  return sum;
}
