import { findHighest } from 'findHighest';

export function solve(banks: string[], length: number) {
  return banks.reduce((acc, bank) => {
    let concat = '';
    for (let i = 0, index = 0; i < length; i++) {
      const [value, highestIndex] = findHighest(bank.slice(index), length - (i + 1));

      concat += value;
      index = highestIndex + index + 1;
    }

    return acc + Number(concat);
  }, 0);
}
