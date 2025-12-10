import type { Coord } from 'Grid';

export class Beam {
  position: Coord;

  constructor(position: Coord) {
    this.position = position;
  }

  getPositionKey() {
    return this.position.toString();
  }
}
