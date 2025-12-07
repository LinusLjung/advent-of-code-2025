import type { Operand } from 'types';

export function solveExpression(expression: [...number[], Operand]) {
  const nums = expression.slice(0, -1) as number[];
  const operand = expression.at(-1)! as Operand;
  let result = nums[0];

  for (let i = 1; i < nums.length; i++) {
    const num = nums[i];

    if (operand === '*') {
      result *= num;
    } else {
      result += num;
    }
  }

  return result;
}
