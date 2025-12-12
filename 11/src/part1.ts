export function part1(input: string) {
  const devices = input
    .split('\n')
    .map((line) => {
      const [id, outputsChunk] = line.split(': ');
      const outputs = outputsChunk.split(' ');

      return [id, outputs] as const;
    })
    .reduce((acc, [id, outputs]) => {
      acc.set(id, outputs);
      return acc;
    }, new Map<string, string[]>());

  const start = devices.get('you')!;

  return solve(start, devices);
}

function solve(outputs: string[], devices: Map<string, string[]>) {
  const queue = [outputs];
  let count = 0;

  while (queue.length) {
    const outputs = queue.pop()!;
    const visited: string[] = [];

    for (const output of outputs) {
      if (visited.includes(output)) {
        continue;
      }

      if (output === 'out') {
        count++;
        continue;
      }

      visited.push(output);

      queue.push(devices.get(output)!);
    }
  }

  return count;
}
