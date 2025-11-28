import getInput from '@/getInput';
import { describe, it } from 'bun:test';
import path from 'path';

const exampleInput = getInput(
  path.join(import.meta.dir, '../example-input.txt'),
);
const input = getInput(path.join(import.meta.dir, '../input.txt'));

describe.todo('part1()', () => {
  it('should output the solution', () => {});
});

describe.todo('part2()', () => {
  it('should output the solution', () => {});
});
