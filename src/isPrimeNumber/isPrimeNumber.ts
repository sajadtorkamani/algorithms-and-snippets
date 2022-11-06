// A prime number is a number that's only divisible by itself and 1
export function isPrimeNumber(num: number): boolean {
  if (num <= 1) {
    return false
  }

  for (let n = 2; n < num; n++) {
    // If the number is divisible by any number other than itself and 1,
    // it's not a prime so return false
    if (num % n === 0) {
      return false
    }
  }

  return true
}
