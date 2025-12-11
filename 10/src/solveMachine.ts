export function solveMachine(targetLights: boolean[], buttons: number[][]) {
  targetLights = targetLights.toReversed();
  const targetNumber = parseInt(
    targetLights.reduce((acc, curr) => acc + (curr ? '1' : '0'), ''),
    2
  );
  let currentNumber = 0;
  const valueButtons = buttons.map((button) => button.reduce((acc, curr) => acc + 2 ** curr, 0));
  const numberCap = parseInt('1'.repeat(buttons.length), 2);

  const successes: string[] = [];

  for (let count = 1; count <= numberCap; count++) {
    const binary = count.toString(2).padStart(buttons.length, '0');

    for (let i = 0; i < binary.length; i++) {
      const char = binary[i];

      if (char === '1') {
        currentNumber = currentNumber ^ valueButtons[i];
      }
    }

    if (currentNumber === targetNumber) {
      successes.push(binary);
    }
    currentNumber = 0;
  }

  return successes.reduce((acc, curr) => {
    let count = 0;
    for (const char of curr) {
      if (char === '1') {
        count++;
      }
    }
    return Math.min(acc, count);
  }, Infinity);
}
