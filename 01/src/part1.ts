import { getInstructions } from "getInstructions";

export function part1(input: string) {
  let currentValue = 50;
  let zeroCount = 0;

  const instructions = getInstructions(input);

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
