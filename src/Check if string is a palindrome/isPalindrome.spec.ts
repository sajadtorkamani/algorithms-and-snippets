import { isPalindrome } from './isPalindrome'

describe('isPalindrome', () => {
  test.each([['john'], ['jim'], ['michael']])(
    'returns false if string is not a palindrome (e.g., %i)',
    (input) => {
      expect(isPalindrome(input)).toEqual(false)
    }
  )

  test.each([['bob'], ['anna'], ['madam']])(
    'returns true if string is a palindrome (e.g., %i)',
    (input) => {
      expect(isPalindrome(input)).toEqual(true)
    }
  )
})
