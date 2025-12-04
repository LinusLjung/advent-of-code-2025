type Content = '.' | '@';
type Grid = Content[][];
type Cell = [row: number, column: number];

function getSurroundingCellsContent(grid: Grid, [row, col]: Cell): Content[] {
  const cells: Content[] = [];

  for (const r of [-1, 0, 1]) {
    for (const c of [-1, 0, 1]) {
      if (r === 0 && c === 0) {
        continue;
      }
      const cell = grid[row + r]?.[col + c];
      if (cell) {
        cells.push(cell);
      }
    }
  }

  return cells;
}

export function part1(input: string) {
  const grid: Grid = input.split('\n').map((line) => line.split('') as Array<'.' | '@'>);
  let accessiblePapers = 0;

  for (let r = 0; r < grid.length; r++) {
    for (let c = 0; c < grid[r].length; c++) {
      if (grid[r][c] === '.') {
        continue;
      }

      const cells = getSurroundingCellsContent(grid, [r, c]);

      if (cells.reduce((acc, curr) => curr === '@' ? acc + 1 : acc, 0) < 4) {
        accessiblePapers++;
      }
    }
  }

  return accessiblePapers;
}
