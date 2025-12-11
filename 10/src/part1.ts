import { solveMachine } from 'solveMachine';

export function part1(input: string) {
  const machines = input.split('\n').map((line) => {
    const [lightsChunk, ...chunks] = line.split(' ');
    const buttonChunks = chunks.slice(0, -1);

    const lights = lightsChunk
      .slice(1, -1)
      .split('')
      .map((char) => (char === '#' ? true : false));

    const buttons = buttonChunks.map((chunk) => chunk.slice(1, -1).split(',').map(Number));

    return { lights, buttons };
  });

  return machines.reduce((acc, { buttons, lights }) => acc + solveMachine(lights, buttons), 0);
}
