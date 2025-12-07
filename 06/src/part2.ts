import { solveExpression } from 'solveExpression';
import type { Expression, Operand } from 'types';

export function part2(input: string) {
  const rows = input.split('\n');
  const nums = rows.slice(0, -1);
  const last = rows.at(-1)!;
  const expressionIndices: number[] = [];

  for (let i = 0; i < last.length; i++) {
    const char = last[i];

    if (char === ' ') {
      continue;
    }

    expressionIndices.push(i);
  }

  const expressions: Expression[] = [];

  for (let i = 0; i < expressionIndices.length; i++) {
    const index = expressionIndices[i];
    const nextIndex = expressionIndices[i + 1];
    let chunk: string[] = [];

    for (const row of nums) {
      const num = nextIndex ? row.slice(index, nextIndex - 1) : row.slice(index);
      chunk.push(num);
    }

    const expression: Expression = [] as unknown as Expression;

    for (let c = chunk[0].length - 1; c >= 0; c--) {
      let numString = '';
      for (let r = 0; r < chunk.length; r++) {
        const char = chunk[r][c];
        if (char === ' ') {
          continue;
        }

        numString += char;
      }

      expression.push(Number(numString));
    }

    expression.push(last[index] as Operand);
    expressions.push(expression);
  }

  return expressions.reduce((acc, curr) => acc + solveExpression(curr), 0);
}
