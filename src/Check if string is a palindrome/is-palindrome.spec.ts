function isPalindromeSpec(str: string) {
  return str === str.split('').reverse().join('')
}

describe('isPalindrome', () => {
  test.each([['john'], ['jim'], ['michael']])(
    'return false if string is not a palindrome (e.g., %i)',
    (input) => {
      expect(isPalindromeSpec(input)).toEqual(false)
    }
  )

  test.each([['bob'], ['anna'], ['madam']])(
    'return true if string is a palindrome (e.g., %i)',
    (input) => {
      expect(isPalindromeSpec(input)).toEqual(true)
    }
  )
})
