export function getPossibleChunkLengths(id: string) {
  const half = Math.floor(id.length / 2);
  const chunks: number[] = [];

  for (let i = half; i > 0; i--) {
    if (id.length % i === 0) {
      chunks.push(i);
    }
  }

  return chunks;
}

export function idIsValid(id: number): boolean | undefined {
  const idString = String(id);
  const lengths = getPossibleChunkLengths(idString);

  for (const length of lengths) {
    const chunk = idString.slice(0, length);
    let isRepeating = true;

    for (let i = length; i < idString.length; i += length) {
      if (chunk !== idString.slice(i, i + length)) {
        isRepeating = false;
        break;
      }
    }

    if (isRepeating) {
      return false;
    }
  }

  return true;
}
