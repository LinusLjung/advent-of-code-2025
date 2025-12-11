import type { Point } from 'types';

type Grid = ('.' | '#' | '0')[][];

export function part2(input: string) {
  const points = input.split('\n').map((line) => line.split(',').map(Number) as Point);
  console.log('points.length', points.length);

  const gridWidth = Math.max(...points.map(([x]) => x));
  const gridHeight = Math.max(...points.map(([, y]) => y));
  const minRow = Math.min(...points.map(([, y]) => y));

  const grid = createGrid(gridWidth, gridHeight);

  for (const [col, row] of points) {
    grid[row][col] = '#';
  }

  for (let i = 0; i < points.length; i++) {
    const [x1, y1] = points[i];
    const [x2, y2] = points[(i + 1) % points.length];

    if (x1 !== x2) {
      for (let x = Math.min(x1, x2) + 1; x < Math.max(x1, x2); x++) {
        grid[y1][x] = '0';
      }
    }

    if (y1 !== y2) {
      for (let y = Math.min(y1, y2) + 1; y < Math.max(y1, y2); y++) {
        grid[y][x1] = '0';
      }
    }
  }

  const firstPoint = points.reduce((acc, curr) => {
    if (curr[1] !== minRow) {
      return acc;
    }

    if (curr[0] < acc[0]) {
      return curr;
    }

    return acc;
  });

  fill(grid, [firstPoint[0] + 1, firstPoint[1] + 1]);

  for (let i = 0; i < points.length; i++) {
    for (let j = 0; j < points.length; j++) {}
  }
}

function fill(grid: Grid, point: Point) {
  const queue = [point];

  while (queue.length) {
    const [x, y] = queue.pop()!;

    if (grid[y]?.[x] !== '.') {
      continue;
    }

    grid[y][x] = '0';

    for (const [dx, dy] of [
      [-1, 0],
      [1, 0],
      [0, -1],
      [0, 1],
    ]) {
      queue.push([x + dx, y + dy] as Point);
    }
  }
}

function areInRow([, y1]: Point, [, y2]: Point) {
  return y1 === y2;
}

function areInColumn([x1]: Point, [x2]: Point) {
  return x1 === x2;
}

function createGrid(width: number, height: number): Grid {
  const grid: Grid = [];

  for (let i = 0; i <= height + 1; i++) {
    grid.push([]);
    for (let j = 0; j <= width + 1; j++) {
      grid[i].push('.');
    }
  }

  return grid;
}
