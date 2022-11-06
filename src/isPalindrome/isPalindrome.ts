export function isPalindrome(str: string) {
  return str === str.split('').reverse().join('')
}
