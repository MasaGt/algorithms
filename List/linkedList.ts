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
    if (this.head === undefined && this.tail === undefined) {
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

  isEmpty(): Boolean {
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

  set next(next: ListNode<T>) {
    this._next = next;
  }
}

export { LinkedList, ListNode };
