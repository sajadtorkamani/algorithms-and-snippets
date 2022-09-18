class LinkedListNode<T> {
  public data: T
  public next: LinkedListNode<T> | null

  constructor(data: T) {
    this.data = data
    this.next = null
  }
}

class LinkedList<T> {
  private head: LinkedListNode<T> | null
  public length: number

  constructor(head: LinkedListNode<T> | null | T[] = null) {
    if (Array.isArray(head)) {
      let initialData = head
      this.head =
        initialData.length > 0 ? new LinkedListNode<T>(initialData[0]) : null
      initialData.slice(1).forEach((data) => {
        this.append(data)
      })

      this.length = initialData.length
      return
    }

    this.head = head
    this.length = 0
  }

  public append(data: T) {
    let node = new LinkedListNode(data)

    // Handle special case: no head
    if (this.head === null) {
      this.head = node
    } else {
      // Start from the head
      let current = this.head

      // As long as we have a next node, let's keep walking through the list
      while (current.next) {
        current = current.next
      }

      // We've reached the end of list, so let's add the new node
      current.next = node
    }

    this.length++

    return this
  }

  public insertAt(data: T, insertionIndex: number) {
    if (insertionIndex < 0) {
      throw new Error(`Index must be greater or equal to 0`)
    }

    // if (this.isEmpty()) {
    //   this.head = new LinkedListNode<T>()
    // }

    if (insertionIndex > this.length - 1) {
      throw new Error(`Index out of bounds: ${insertionIndex}`)
    }

    // Start from the head
    let current = this.head
    let currentIndex = 0

    // Handle special case: empty list
    if (current === null) {
      current = new LinkedListNode<T>(data)
    }

    // Traverse through list
    while (current.next) {
      currentIndex++
      if (insertionIndex === currentIndex) {
        const prevNext = current.next
        const newNode = new LinkedListNode<T>(data)
        current.next = newNode
        newNode.next = prevNext
      } else {
        current = current.next
      }
    }
  }

  public size() {
    return this.length
  }

  public getFirst() {
    return this.head
  }

  public getLast() {
    return this.head
  }

  public toArray() {
    if (!this.head) {
      return []
    }

    let current = this.head
    let array = [current.data]

    while (current.next) {
      current = current.next
      array.push(current.data)
    }

    return array
  }

  public isEmpty() {
    return this.head === null
  }
}

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

  describe('#insertAt', () => {
    it('inserts node at index', () => {
      const list = new LinkedList([1, 2, 3])

      list.insertAt(500, 1)

      expect(list.toArray()).toEqual([1, 500, 2, 3])
    })

    it('throws error if index is invalid', () => {
      const list = new LinkedList([1, 2, 3])

      expect(() => {
        list.insertAt(500, 5)
      }).toThrowError(`Index out of bounds: 5`)
    })
  })
})
