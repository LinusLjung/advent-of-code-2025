export function part1(input: string) {
  const chunks = input.split('\n\n');
  const shapeSizes = chunks.slice(0, -1).map((shape) => {
    let count = 0;
    for (const char of shape) {
      if (char === '#') {
        count++;
      }
    }
    return count;
  });

  const gridsChunk = chunks.at(-1)!;

  const regions = gridsChunk.split('\n').map((line) => {
    const [areaChunk, presentsChunk] = line.split(': ');
    const area = areaChunk
      .split('x')
      .map(Number)
      .reduce((acc, curr) => acc * curr, 1);

    const presentsSize = presentsChunk
      .split(' ')
      .map(Number)
      .map((count, i) => count * shapeSizes[i]);

    return [area, presentsSize] as const;
  });

  return regions.reduce(
    (acc, [area, presents]) => acc + (area > presents.reduce((acc, curr) => acc + curr) ? 1 : 0),
    0
  );
}
