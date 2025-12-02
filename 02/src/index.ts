import { getArgs } from '@/getArgs';
import getInput from '@/getInput';
import { part1 } from 'part1';
import { part2 } from 'part2';

const { part } = getArgs<{ part: number }>();
const input = getInput();

if (!part || part === 1) {
  console.time('part1');
  console.log(part1(input));
  console.timeEnd('part1');
}

if (!part || part === 2) {
  console.time('part2');
  console.log(part2(input));
  console.timeEnd('part2');
}
