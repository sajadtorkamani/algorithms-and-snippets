export function arrayToCommaSeparatedString(arr: string[]): string {
  if (arr.length === 1) {
    return arr[0]
  }

  if (arr.length === 2) {
    return `${arr[0]} and ${arr[1]}`
  }

  return (
    arr.slice(0, arr.length - 1).join(', ') + ', and ' + arr[arr.length - 1]
  )
}
