// WIP
export class LinkedListNode<T> {
  public data: T
  public next: LinkedListNode<T> | null

  constructor(data: T) {
    this.data = data
    this.next = null
  }
}

export class LinkedList<T> {
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

  public indexOf(data: T): number {
    if (this.isEmpty()) {
      return -1
    }

    // Start from head
    let current = this.head
    let index = 0

    // Keep traversing list until we find the given data
    while (current !== null) {
      if (current.data === data) {
        // We've found it. Return the index
        return index
      }

      index++
      current = current.next
    }

    // We've traversed the list but haven't found the data.
    return -1
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
