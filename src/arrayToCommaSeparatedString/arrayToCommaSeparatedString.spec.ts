import { arrayToCommaSeparatedString } from './arrayToCommaSeparatedString'

describe('arrayToCommaSeparatedString', () => {
  describe('when array has a single item', () => {
    test('returns the single item as string', () => {
      expect(arrayToCommaSeparatedString(['Jim'])).toEqual('Jim')
    })
  })

  describe('when array has two items', () => {
    test("returns first and second item separated by 'and'", () => {
      expect(arrayToCommaSeparatedString(['Jim', 'John'])).toEqual(
        'Jim and John'
      )
    })
  })

  describe('when array has three or more items', () => {
    test('returns comma separated list', () => {
      expect(arrayToCommaSeparatedString(['Jim', 'John', 'Jack'])).toEqual(
        'Jim, John, and Jack'
      )
    })
  })
})
