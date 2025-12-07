import { solveExpression } from 'solveExpression';
import type { Expression, Operand } from 'types';

export function part1(input: string) {
  const expressions = transpose(
    input.split('\n').map(
      (r) =>
        r
          .trim()
          .split(/\s+/)
          .map((a) => {
            const num = Number(a);

            if (Number.isNaN(num)) {
              return a as Operand;
            }

            return num;
          }) as Expression
    )
  ) as Expression[];

  return expressions.reduce((acc, curr) => acc + solveExpression(curr), 0);
}

function transpose<T>(arr: T[][]): T[][] {
  return arr[0].map((_, c) => arr.map((r) => r[c]));
}
