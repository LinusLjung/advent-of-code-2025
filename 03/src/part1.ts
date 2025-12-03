function findHighest(bank: string, isA: boolean) {
  let highestValue = 0;
  let highestIndex = 0;

  for (let i = 0; i < bank.length - (isA ? 1 : 0); i++) {
    const current = Number(bank[i]);

    if (current > highestValue) {
      highestValue = current;
      highestIndex = i;
    }
  }

  return [highestValue, highestIndex];
}

export function part1(input: string) {
  const banks = input.split('\n');

  return banks.reduce((acc, bank) => {
    const [aValue, aIndex] = findHighest(bank, true);
    const [bValue] = findHighest(bank.slice(aIndex + 1), false);

    return acc + Number(aValue.toString() + bValue.toString());
  }, 0);
}
