import { solve } from "solve";

export function part1(input: string) {
  const banks = input.split('\n');

  return solve(banks, 2);
}
