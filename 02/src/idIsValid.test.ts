import { getPossibleChunkLengths, idIsValid } from 'idIsValid';
import { describe, expect, it } from 'bun:test';

describe('idIsValid()', () => {
  it('should handle repeating patterns', () => {
    expect(idIsValid(111)).toBe(false);
    expect(idIsValid(1112)).toBe(true);
    expect(idIsValid(11111)).toBe(false);
    expect(idIsValid(111112)).toBe(true);
  });
});

describe('getPossibleChunkLengths()', () => {
  it('should return possible chunk lengths', () => {
    expect(getPossibleChunkLengths('111')).toEqual([1]);
    expect(getPossibleChunkLengths('1112')).toEqual([2, 1]);
    expect(getPossibleChunkLengths('11111')).toEqual([1]);
    expect(getPossibleChunkLengths('111112')).toEqual([3, 2, 1]);
  });
});
