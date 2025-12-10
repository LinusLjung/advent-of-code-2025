import { Beam } from 'Beam';
import Grid from 'Grid';

const cache = new Map<string, number>();

function solve(beam: Beam, grid: Grid): number {
  const cacheKey = beam.getPositionKey();

  if (cache.has(cacheKey)) {
    return cache.get(cacheKey)!;
  }

  beam.position[0]++;

  const cell = grid.getCell(beam.position);

  if (!cell) {
    cache.set(cacheKey, 1);
    return 1;
  }

  if (cell === '^') {
    const result =
      solve(new Beam([beam.position[0], beam.position[1] - 1]), grid) +
      solve(new Beam([beam.position[0], beam.position[1] + 1]), grid);

    cache.set(cacheKey, result);

    return result;
  }

  const result = solve(new Beam(beam.position), grid);

  cache.set(cacheKey, result);

  return result;
}

export function part2(input: string) {
  const grid = new Grid(input);
  const start = grid.getStart();

  return solve(new Beam([0, start]), grid);
}
