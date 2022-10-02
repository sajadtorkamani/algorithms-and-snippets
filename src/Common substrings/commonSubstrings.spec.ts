import { commonSubstrings } from './commonSubstrings'

describe('commonSubstrings', () => {
  test('returns list of common substrings from two strings', () => {
    const str1 = 'fooxxbar'
    const str2 = 'foobarzzz'

    expect(commonSubstrings(str1, str2)).toEqual(['foo', 'bar'])
  })

  // test('ignores single char matches')
})
