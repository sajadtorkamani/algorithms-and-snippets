export function getConsecutiveElements(arr: number[], num: number): number[][] {
  let consecutiveElements: number[][] = []

  for (let index = 0; index < arr.length; index++) {
    const currentNum = arr[index]
    const prevNum = arr[index - 1]

    const isStartOfConsecutives = currentNum === num && prevNum !== num
    if (isStartOfConsecutives) {
      consecutiveElements.push([num])
      continue
    }

    const prevConsecutives = consecutiveElements[consecutiveElements.length - 1]
    const isPartOfConsecutives =
      currentNum === num && prevNum === num && Array.isArray(prevConsecutives)
    if (isPartOfConsecutives) {
      consecutiveElements[consecutiveElements.length - 1] = [
        ...prevConsecutives,
        currentNum,
      ]
    }
  }

  return consecutiveElements
}
