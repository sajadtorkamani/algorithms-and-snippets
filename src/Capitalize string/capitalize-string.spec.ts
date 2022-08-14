function capitalize(str: string) {
  return str.slice(0, 1).toUpperCase() + str.slice(1).toLowerCase()
}

describe('capitalize', () => {
  test.each([
    ['john', 'John'],
    ['JOHN', 'John'],
    ['john doe', 'John doe'],
    ['JOHN DOE', 'John doe'],
  ])(
    'Capitalizes the first letter of the string and lowercases the rest (e.g., %s to %s)',
    (input, expectedResult) => {
      expect(capitalize(input)).toEqual(expectedResult)
    }
  )
})
