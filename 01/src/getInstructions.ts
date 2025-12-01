export function getInstructions(input: string) {
  return input.split('\n').map(line => {
    const direction = line[0] as 'L' | 'R';
    const value = Number(line.slice(1));

    return { direction, value };
  });
}