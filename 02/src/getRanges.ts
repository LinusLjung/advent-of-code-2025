export function getRanges(input: string) {
  return input.split(',').map((range) => range.split('-').map(Number) as [number, number]);
}
