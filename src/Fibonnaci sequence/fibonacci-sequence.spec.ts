function fibbonaciSequence(num: number): number[] {
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

describe('fibbonaciSequence', () => {
  test.each([-5, -1, 0])(
    'throws error if non-positive integer (%i) is given',
    (input) => {
      expect(() => {
        fibbonaciSequence(input)
      }).toThrowError(/Invalid input/)
    }
  )

  test.each([
    [1, [0]],
    [2, [0, 1]],
    [5, [0, 1, 1, 2, 3]],
    [7, [0, 1, 1, 2, 3, 5, 8]],
    [10, [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]],
  ])('generates correct sequence for %i', (input, expectedResult) => {
    expect(fibbonaciSequence(input)).toEqual(expectedResult)
  })
})
