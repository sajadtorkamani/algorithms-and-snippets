export function substrings(str: string): string[] {
  const result: string[] = []
  const chars = str.split('')

  for (
    let iterationIndex = 0;
    iterationIndex < chars.length;
    iterationIndex++
  ) {
    // 0: f
    // ---
    // 1: o
    for (
      let substrIndex = iterationIndex;
      substrIndex < chars.length;
      substrIndex++
    ) {
      // 0 f
      // 1 fo
      // 2 foo
      // ---
      // 0
      const substr = chars.slice(0, iterationIndex + 1).join('')
      result.push(substr)
    }
  }

  return result
}
