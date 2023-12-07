/**
 * Singly Linked List
 * properties
 *  head: ListNode<T>
 */
class LinkedList<T> {
  private size: number = 0;
  private head: ListNode<T> | undefined;
  private tail: ListNode<T> | undefined;

  constructor();
  constructor(values?: T[]);
  constructor(values?: T[]) {
    if (values === undefined || values === null) {
      //create empty list
      this.head = undefined;
      this.tail = undefined;
    } else {
      //create non-empty list
      values.forEach((value) => {
        this.add(value);
      });
    }
  }

  //insert node at the end of the list
  add(value: T): void {
    if (this.head == undefined) {
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
      const prevNode = this.head;
      this.head = newNode;
      if (prevNode) {
        this.head.next = prevNode;
      }
    }
    this.size++;
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
      if (this.tail) {
        this.tail.next = newNode;
        this.tail = newNode;
      }
    }
    this.size++;
  }

  /**
   *
   * @param value
   */
  populateFirstNode(value: T): void {
    this.head = new ListNode<T>(value);
    this.tail = this.head;
  }

  /**
   *
   * @param index
   * @returns value at the specified index otherwise undefined
   */
  get(index: number): T | undefined {
    // range check
    if (this.isEmpty() || index < 0 || index > this.size) {
      return undefined;
    }

    let currentNode = this.head;
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
    return this.head?.value;
  }

  /**
   *
   * @param value
   * @returns true if a list contains the specified value. Otherwise, false.
   */
  contains(value: T): boolean {
    let currentNode = this.head;
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
    if (this.isEmpty() || index > this.size || index < 0) {
      throw new RangeError("index is out of bounds");
    }

    //find node at the specified index
    let currentNode = this.head;
    let returnValue: T;
    if (index === 0) {
      //remove head node
      if (!currentNode) {
        throw new RangeError("index is out of bounds");
      } else {
        this.head = currentNode.next;
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
    this.size--;
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

  /**
   *
   * @returns Value of the tail node. Otherwise, undefined.
   */
  getLast(): T | undefined {
    return this.tail?.value;
  }

  toString(): string {
    let contents: string = "";

    let currentNode: ListNode<T> | undefined = this.head;

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
    return this.size === 0;
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
