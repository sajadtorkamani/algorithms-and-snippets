describe('capitalize', () => {
  test.each([
    ['john', 'John'],
    ['JOHN', 'John'],
    ['john doe', 'John doe'],
    ['JOHN DOE', 'John doe'],
  ])('Converts %s to %s', (input, expectedOutput) => {
    expect(capitalize(input)).toEqual(expectedOutput)
  })
})

export function capitalize(str: string) {
  return str.slice(0, 1).toUpperCase() + str.slice(1).toLowerCase()
}
