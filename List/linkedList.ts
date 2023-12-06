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
      this.head = new ListNode<T>(value);
      this.tail = this.head;
    } else {
      //add node to the tail
      const newNode = new ListNode<T>(value);
      if (this.tail) {
        this.tail.next = newNode;
        this.tail = newNode;
      }
    }
    this.size++;
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
