import { hasDuplicates } from './hasDuplicates'

describe('hasDuplicates', () => {
  test.each([
    [[2, 4, 4, 6], true],
    [[2, 4, 6, 1, 6], true],
  ])(
    'returns true if array has duplicates (e.g., %s)',
    (input, expectedResult) => {
      expect(hasDuplicates(input)).toEqual(expectedResult)
    }
  )

  test.each([
    [[2, 4, 6], false],
    [[2, 4, 6, 1, 5], false],
  ])(
    "returns false if array doesn't have duplicates (e.g., %s)",
    (input, expectedResult) => {
      expect(hasDuplicates(input)).toEqual(expectedResult)
    }
  )
})
