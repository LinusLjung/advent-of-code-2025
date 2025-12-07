type Operand = '*' | '+';
type Expression = [...number[], Operand];

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

function solveExpression(expression: [...number[], Operand]) {
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

function transpose<T>(arr: T[][]): T[][] {
  return arr[0].map((_, c) => arr.map((r) => r[c]));
}
