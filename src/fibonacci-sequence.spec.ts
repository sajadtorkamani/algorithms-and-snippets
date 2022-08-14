import { fibbonaciSequence } from './fibonacci-sequence'

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
  ])('generates correct sequence for %i', (input, expected) => {
    expect(fibbonaciSequence(input)).toEqual(expected)
  })
})
