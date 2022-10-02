import { substrings } from './substrings'

describe('substrings', () => {
  test.each([
    ['foo', ['f', 'fo', 'foo']],
    ['foobar', ['f', 'fo', 'foo', 'foob', 'fooba', 'foobar']],
    ['foo bar', ['f', 'fo', 'foo', 'foo ', 'foo b', 'foo ba', 'foo bar']],
    ['', []],
  ])(
    'returns all the substrings from a given string',
    (input, expectedOutput) => {
      expect(substrings(input)).toEqual(expectedOutput)
    }
  )
})
