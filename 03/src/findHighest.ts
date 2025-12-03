export function findHighest(bank: string, reserve: number) {
  let highestValue = 0;
  let highestIndex = 0;

  for (let i = 0; i < bank.length - reserve; i++) {
    const current = Number(bank[i]);

    if (current > highestValue) {
      highestValue = current;
      highestIndex = i;
    }
  }

  return [highestValue, highestIndex];
}
