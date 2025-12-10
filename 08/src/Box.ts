export class Box {
  x: number;
  y: number;
  z: number;
  connections: Box[] = [];
  closest: { box: Box; distance: number } | null = null;

  constructor(x: number, y: number, z: number) {
    this.x = x;
    this.y = y;
    this.z = z;
  }

  toString() {
    return [this.x, this.y, this.z].toString();
  }
}
