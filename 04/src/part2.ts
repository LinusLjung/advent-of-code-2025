import { cellIsAccessible } from "cellIsAccessible";
import { forEachPaper } from "forEachPaper";
import type { Content, Grid } from "types";

export function part2(input: string) {
  const grid: Grid = input.split('\n').map(row => row.split('') as Content[]);
  let accessiblePapers = 0;

  let didFindAccessible = false;

  do {
    didFindAccessible = false;
    forEachPaper(grid, cell => {
      if (!cellIsAccessible(grid, cell)) {
        return;
      }

      accessiblePapers++;
      didFindAccessible = true;

      grid[cell[0]][cell[1]] = '.';
    });
  } while (didFindAccessible);

  return accessiblePapers;
}
