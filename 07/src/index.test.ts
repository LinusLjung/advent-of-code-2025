import getInput from '@/getInput';
import { describe, expect, it } from 'bun:test';
import { part1 } from 'part1';
import path from 'path';

const exampleInput = getInput(path.join(import.meta.dir, '../example-input.txt'));
const input = getInput(path.join(import.meta.dir, '../input.txt'));

describe('part1()', () => {
  it('should output the solution', () => {
    expect(part1(exampleInput)).toBe(21);
    expect(part1(input)).toBeLessThan(1962);
    expect(part1(input)).toBe(1698);
  });
});

describe.todo('part2()', () => {
  it('should output the solution', () => {});
});
