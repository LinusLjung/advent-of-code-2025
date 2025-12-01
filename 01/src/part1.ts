export function part1(input: string) {
  let currentValue = 50;
  let zeroCount = 0;

  const instructions = input.split('\n').map(line => {
    const direction = line[0] as 'L' | 'R';
    const value = Number(line.slice(1));

    return { direction, value };
  });

  for (const { direction, value } of instructions) {
    if (direction === 'L') {
      currentValue -= value;
    } else {
      currentValue += value;
    }

    currentValue = (currentValue + 100) % 100;

    if (currentValue === 0) {
      zeroCount++;
    }
  }

  return zeroCount;
}
