export function substrings(str: string): string[] {
  const result: string[] = []
  const chars = str.split('')

  chars.forEach((char, index) => {
    const substr = chars.slice(0, index + 1).join('')
    result.push(substr)
  })

  return result
}
