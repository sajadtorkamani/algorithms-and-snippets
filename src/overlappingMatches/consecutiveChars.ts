export function consecutiveChars(str: string): string[] {
  // This regex finds consecutive characters
  const consecutiveCharRegex = /(.)\1/g

  // We'll store the consecutive chars in this array
  const matches: string[] = []

  let match: RegExpExecArray | null = null

  // Keep testing the regex against the string until it doesn't match
  while (match = consecutiveCharRegex.exec(str)) {
    matches.push(match[0])

    // This is the important bit to ensure we find overlapping matches.
    //
    // The RegExp.lastIndex property specifies the index at which to start the
    // next match (https://tinyurl.com/k5v5ff3a).
    //
    // By setting it to match.index + 1, we ensure that on the next iteration
    // of the while loop, we can apply the regex match against the remaining
    // string.
    consecutiveCharRegex.lastIndex = match.index + 1 // <- Important
  }

  return matches
}

