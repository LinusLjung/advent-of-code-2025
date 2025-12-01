import { getInstructions } from "getInstructions";

export function part2(input: string) {
  let zeroCount = 0;
  let currentValue = 50;

  const instructions = getInstructions(input);

  for (let { direction, value } of instructions) {
    const prevValue = currentValue;
    zeroCount += Math.floor(value / 100);
    value %= 100;

    if (direction === 'L') {
      currentValue -= value;
      if (currentValue <= 0 && prevValue !== 0) {
        zeroCount++;
      }
    }

    if (direction === 'R') {
      currentValue += value;
      if (currentValue >= 100) {
        zeroCount++;
      }
    }

    currentValue = (currentValue + 100) % 100;
  }

  return zeroCount;
}
