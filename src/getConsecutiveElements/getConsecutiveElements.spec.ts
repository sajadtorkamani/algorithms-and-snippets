import { getConsecutiveElements } from './getConsecutiveElements'

describe('getConsecutiveElements', () => {
  test('returns array of consecutive elements', () => {
    expect(getConsecutiveElements([2, 2, 4, 5, 6, 2, 2, 2, 7, 2], 2)).toEqual([
      [2, 2],
      [2, 2, 2],
      [2],
    ])

    expect(
      getConsecutiveElements([2, 2022, 4, 5, 6, 2, 2, 2, 7, 2], 2)
    ).toEqual([[2], [2, 2, 2], [2]])
  })
})
