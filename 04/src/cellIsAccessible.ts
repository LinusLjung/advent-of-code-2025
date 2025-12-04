import { getSurroundingCellsContent } from "getSurroundingCellsContent";
import type { Grid, Cell } from "types";

export function cellIsAccessible(grid: Grid, cell: Cell) {
  const cells = getSurroundingCellsContent(grid, cell);

  return cells.reduce((acc, curr) => curr === '@' ? acc + 1 : acc, 0) < 4;
}
