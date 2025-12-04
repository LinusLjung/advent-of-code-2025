import type { Grid, Cell, Content } from "types";

export function getSurroundingCellsContent(grid: Grid, [row, col]: Cell): Content[] {
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
