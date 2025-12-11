import { describe, expect, it } from 'bun:test';
import { solveMachine } from 'solveMachine';

describe('solveMachine()', () => {
  it('should return fewest number of presses', () => {
    expect(solveMachine([false, true, true, false], [[3], [1, 3], [2], [2, 3], [0, 2], [0, 1]])).toBe(2);
    expect(
      solveMachine(
        [false, false, false, true, false],
        [
          [0, 2, 3, 4],
          [2, 3],
          [0, 4],
          [0, 1, 2],
          [1, 2, 3, 4],
        ]
      )
    ).toBe(3);
    expect(
      solveMachine(
        [false, true, true, true, false, true],
        [
          [0, 1, 2, 3, 4],
          [0, 3, 4],
          [0, 1, 2, 4, 5],
          [1, 2],
        ]
      )
    ).toBe(2);
  });
});
