import type { Grid, Cell } from "types";

export function forEachPaper(grid: Grid, callback: (cell: Cell) => void) {
  for (let r = 0; r < grid.length; r++) {
    for (let c = 0; c < grid[r].length; c++) {
      if (grid[r][c] === '.') {
        continue;
      }

      callback([r, c]);
    }
  }
}
