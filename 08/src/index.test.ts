import getInput from '@/getInput';
import { describe, expect, it } from 'bun:test';
import { part1 } from 'part1';
import { part2 } from 'part2';
import path from 'path';

const exampleInput = getInput(path.join(import.meta.dir, '../example-input.txt'));
const input = getInput(path.join(import.meta.dir, '../input.txt'));

describe('part1()', () => {
  it('should output the solution', () => {
    expect(part1(exampleInput, 10)).toBe(40);
    expect(part1(input, 1000)).toBe(181584);
  });
});

describe('part2()', () => {
  it('should output the solution', () => {
    expect(part2(exampleInput)).toBe(25272);
    expect(part2(input)).toBe(8465902405);
  });
});
