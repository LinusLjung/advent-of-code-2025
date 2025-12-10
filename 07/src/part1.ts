import { Beam } from 'Beam';
import Grid from 'Grid';

export function part1(input: string) {
  const grid = new Grid(input);
  const start = grid.getStart();
  const startBeam = new Beam([0, start]);
  const beams = new Map<string, Beam>();

  beams.set(startBeam.getPositionKey(), startBeam);

  let splitCount = 0;

  while (beams.size) {
    for (const [key, beam] of beams) {
      beams.delete(key);
      beam.position[0]++;
      beams.set(beam.getPositionKey(), beam);

      const content = grid.getCell(beam.position);

      if (!content) {
        beams.delete(beam.getPositionKey());
        continue;
      }

      if (content === '^') {
        beams.delete(beam.getPositionKey());
        splitCount++;
        const leftBeam = new Beam([beam.position[0], beam.position[1] - 1]);
        const rightBeam = new Beam([beam.position[0], beam.position[1] + 1]);

        beams.set(leftBeam.getPositionKey(), leftBeam);
        beams.set(rightBeam.getPositionKey(), rightBeam);
      }
    }
  }

  return splitCount;
}
