import { LinkedList } from './LinkedList'

describe('LinkedList', () => {
  describe('#constructor', () => {
    it('can create empty list', () => {
      const list = new LinkedList()

      expect(list.size()).toBe(0)
      expect(list.getFirst()).toBe(null)
      expect(list.getLast()).toBe(null)
    })

    it('can create list with initial data', () => {
      const list = new LinkedList([2, 4, 6])

      expect(list.toArray()).toEqual([2, 4, 6])
    })
  })

  describe('#append', () => {
    it('can append nodes to list', () => {
      const list = new LinkedList([2, 4, 6])

      expect(list.toArray()).toEqual([2, 4, 6])
    })
  })

  // describe('#insertAt', () => {
  //   it('inserts node at index', () => {
  //     const list = new LinkedList([1, 2, 3])
  //
  //     list.insertAt(500, 2)
  //
  //     expect(list.toArray()).toEqual([1, 500, 2, 3])
  //   })
  //
  //   it('inserts node at index 0', () => {
  //     const list = new LinkedList([1, 2, 3])
  //
  //     list.insertAt(500, 0)
  //
  //     expect(list.toArray()).toEqual([500, 1, 2, 3])
  //   })
  //
  //   it('throws error if index is invalid', () => {
  //     const list = new LinkedList([1, 2, 3])
  //
  //     expect(() => {
  //       list.insertAt(500, 5)
  //     }).toThrowError(`Index out of bounds: 5`)
  //   })
  // })

  describe('indexOf', () => {
    it('returns index of data within the list', () => {
      const list = new LinkedList([2, 4, 6, 8])

      expect(list.indexOf(6)).toEqual(2)
    })

    it("returns -1 if list doesn't have the data", () => {
      const list = new LinkedList([2, 4, 6, 8])

      expect(list.indexOf(10)).toEqual(-1)
    })
  })
})
