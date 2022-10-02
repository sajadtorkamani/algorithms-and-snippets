import { substrings } from './substrings'

describe.only('substrings', () => {
  test('returns substrings', () => {
    expect(substrings('foo')).toEqual(['f', 'fo', 'foo', 'o', 'oo'])
  })

  test('returns empty list for an empty string', () => {
    expect(substrings('')).toEqual([])
  })
})
