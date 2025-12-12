import { getArgs } from '@/getArgs';
import getInput from '@/getInput';
import { part1 } from 'part1';

const { part } = getArgs<{ part: number }>();
const input = getInput();

if (!part || part === 1) {
  console.log(part1(input));
}
