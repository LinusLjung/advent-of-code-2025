type Content = '.' | 'S' | '^';
export type Coord = [row: number, column: number];

class Grid {
  grid: Content[][];

  constructor(input: string) {
    this.grid = input.split('\n').map((row) => row.split('') as Content[]);
  }

  get width() {
    return this.grid[0].length;
  }

  get height() {
    return this.grid.length;
  }

  getCell([row, column]: Coord) {
    return this.grid[row]?.[column];
  }

  getStart() {
    return this.grid[0].findIndex((cell) => cell === 'S');
  }
}

export default Grid;
