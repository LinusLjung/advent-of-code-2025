import { solve } from 'solve';

export function part2(input: string) {
  const banks = input.split('\n');

  return solve(banks, 12);
}
