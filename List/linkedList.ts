/**
 * Singly Linked List
 * properties
 * _size: length of this list
 * _head: the fiest ListNode<T> of this list
 * _tail: the last ListNode<T> of this list
 */
class LinkedList<T> {
  private _size: number = 0;
  private _head: ListNode<T> | undefined;
  private _tail: ListNode<T> | undefined;

  constructor();
  constructor(values?: T[]);
  constructor(values?: T[]) {
    if (values === undefined || values === null) {
      //create empty list
      this._head = undefined;
      this._tail = undefined;
    } else {
      //create non-empty list
      values.forEach((value) => {
        this.add(value);
      });
    }
  }

  //insert node at the end of the list
  add(value: T): void {
    if (this._head == undefined) {
      //add node to the head
      this.addFirst(value);
    } else {
      //add node to the tail
      this.addLast(value);
    }
  }

  /**
   * insert a node to the head
   * @param value
   */
  addFirst(value: T): void {
    if (this.isEmpty()) {
      //populate first node
      this.populateFirstNode(value);
    } else {
      const newNode = new ListNode<T>(value);
      const prevNode = this._head;
      this._head = newNode;
      if (prevNode) {
        this._head.next = prevNode;
      }
    }
    this._size++;
  }

  /**
   * insert a node to the tail
   * @param value
   */
  addLast(value: T): void {
    if (this.isEmpty()) {
      //populate first node
      this.populateFirstNode(value);
    } else {
      const newNode = new ListNode<T>(value);
      if (this._tail) {
        this._tail.next = newNode;
        this._tail = newNode;
      }
    }
    this._size++;
  }

  /**
   *
   * @param value
   */
  private populateFirstNode(value: T): void {
    this._head = new ListNode<T>(value);
    this._tail = this._head;
  }

  /**
   *
   * @param index
   * @returns value at the specified index otherwise undefined
   */
  get(index: number): T | undefined {
    // range check
    if (this.isIndexInTheRange(index)) {
      return undefined;
    }

    let currentNode = this._head;
    for (let i = 0; i < index; i++) {
      currentNode = currentNode?.next;
    }
    return currentNode?.value;
  }

  /**
   *
   * @returns Value at the head. Otherwise, undefined.
   */
  getFirst(): T | undefined {
    return this._head?.value;
  }

  /**
   *
   * @returns Value of the tail node. Otherwise, undefined.
   */
  getLast(): T | undefined {
    return this._tail?.value;
  }

  /**
   *
   * @param value
   * @returns true if a list contains the specified value. Otherwise, false.
   */
  contains(value: T): boolean {
    let currentNode = this._head;
    while (currentNode) {
      if (currentNode.value === value) {
        return true;
      }
      currentNode = currentNode.next;
    }
    return false;
  }

  /**
   * remove node at the specified index
   * @param index
   * @returns removed value
   * @throws RangeError
   */
  remove(index: number): T {
    if (this.isIndexInTheRange(index)) {
      throw new RangeError("index is out of bounds");
    }

    //find node at the specified index
    let currentNode = this._head;
    let returnValue: T;
    if (index === 0) {
      //remove head node
      if (!currentNode) {
        throw new RangeError("index is out of bounds");
      } else {
        this._head = currentNode.next;
        returnValue = currentNode.value;
      }
    } else {
      let prevNode;
      for (let i = 0; i < index; i++) {
        prevNode = currentNode;
        currentNode = currentNode?.next;
      }

      if (!currentNode || !prevNode) {
        throw new RangeError("index is out of bounds");
      } else {
        prevNode.next = currentNode.next;
        returnValue = currentNode.value;
      }
    }

    //remove current node
    if (currentNode) {
      delete currentNode.next;
      currentNode = undefined;
    }
    this._size--;
    return returnValue;
  }

  /**
   * remove all the nodes from this list
   */
  clear(): void {
    while (!this.isEmpty()) {
      this.remove(0);
    }
  }

  toString(): string {
    let contents: string = "";

    let currentNode: ListNode<T> | undefined = this._head;

    while (currentNode) {
      // add ", " between the nodes
      if (!currentNode.next) {
        contents += currentNode.value;
      } else {
        contents += currentNode.value + ", ";
      }
      currentNode = currentNode.next;
    }
    return contents;
  }

  isEmpty(): boolean {
    return this._size === 0;
  }

  /**
   *
   * @param index
   * @returns true is index is in the range of this list. Otherwise, false.
   */
  private isIndexInTheRange(index: number): boolean {
    return this.isEmpty() || index > this._size || index < 0;
  }
}

/**
 * Item of the LinkedList
 * properties
 *  value: data
 *  next: pointer to the next ListNode
 */
class ListNode<T> {
  constructor(
    private _value: T,
    private _next?: ListNode<T>
  ) {}

  get value(): T {
    return this._value;
  }

  set value(value: T) {
    this._value = value;
  }

  get next(): ListNode<T> | undefined {
    return this._next;
  }

  set next(next: ListNode<T> | undefined) {
    this._next = next;
  }
}

export { LinkedList, ListNode };
