import { cellIsAccessible } from "cellIsAccessible";
import { forEachPaper } from "forEachPaper";
import type { Grid } from "types";

export function part1(input: string) {
  const grid: Grid = input.split('\n').map((line) => line.split('') as Array<'.' | '@'>);
  let accessiblePapers = 0;

  forEachPaper(grid, cell => {
    if (cellIsAccessible(grid, cell)) {
      accessiblePapers++;
    }
  });

  return accessiblePapers;
}
