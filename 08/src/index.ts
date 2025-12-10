import { getArgs } from '@/getArgs';
import getInput from '@/getInput';
import { part1 } from 'part1';
import { part2 } from 'part2';

const { part, iterations } = getArgs<{ part: number; iterations: number }>();
const input = getInput();

if (!part || part === 1) {
  console.log(part1(input, iterations));
}

if (!part || part === 2) {
  console.log(part2(input));
}
