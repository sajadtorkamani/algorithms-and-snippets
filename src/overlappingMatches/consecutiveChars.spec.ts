import { describe, test, expect } from 'vitest'

import { consecutiveChars } from './consecutiveChars'

describe('consecutiveChars', () => {
  test.each([
    ['AaBBCCC', ['BB', 'CC', 'CC']],
  ])(
    'returns consecutive chars',
    (input, expectedResult) => {
      expect(consecutiveChars(input)).toEqual(expectedResult)
    }
  )
})
