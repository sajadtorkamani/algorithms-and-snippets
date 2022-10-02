export function fibbonaciSequence(num: number): number[] {
  const sequence = [0, 1]

  // Validate input
  if (num <= 0) {
    throw new Error(`Invalid input: ${num}. Must be positive integer`)
  }

  if (num === 1) {
    return [sequence[0]]
  }

  // Generate sequence
  for (let sequenceIndex = 2; sequenceIndex < num; sequenceIndex++) {
    const previousNum = sequence[sequenceIndex - 1]
    const precedingNum = sequence[sequenceIndex - 2]
    const newSequenceNum = previousNum + precedingNum

    sequence.push(newSequenceNum)
  }

  return sequence
}
