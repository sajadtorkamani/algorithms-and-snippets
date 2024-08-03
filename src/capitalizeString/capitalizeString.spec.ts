import { describe, test, expect } from 'vitest'

import { capitalize } from './capitalizeString'

describe('capitalize', () => {
  test.each([
    ['john', 'John'],
    ['JOHN', 'John'],
    ['john doe', 'John doe'],
    ['JOHN DOE', 'John doe']
  ])(
    'Capitalizes the first letter of the string and lowercases the rest (e.g., %s to %s)',
    (input, expectedResult) => {
      expect(capitalize(input)).toEqual(expectedResult)
    }
  )
})
