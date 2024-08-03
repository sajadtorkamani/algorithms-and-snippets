import { describe, test, expect } from 'vitest'

import { isPrimeNumber } from './isPrimeNumber'

describe('isPrimeNumber', () => {
  test.each([2, 3, 5, 7, 11, 17, 19, 23])(
    'returns true if number is a prime',
    (num) => {
      expect(isPrimeNumber(num)).toBe(true)
    }
  )

  test.each([4, 6, 8, 9, 10, 12, 14])(
    'returns false if number is not a prime',
    (num) => {
      expect(isPrimeNumber(num)).toBe(false)
    }
  )
})
