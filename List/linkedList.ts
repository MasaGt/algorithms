/**
 * Singly Linked List
 * properties
 *  head: ListNode<T>
 */
class LinkedList<T> {

    private head: ListNode<T> | undefined;

    constructor(values?: T[]) {
        if(
            values === undefined ||
            values === null ||
            values.length > 0
        ) {
            //add ListNodes based on the params
            values?.forEach((val) => {
                this.push(val);
            });
        }
    }

    //insert node at the end of the list
    push(value: T): void {
        if (this.head == undefined) {
            //add node to the head
            this.head = new ListNode<T>(value);
            return;
        } else {
            
            let currentNode = this.head;
            while(currentNode.next) {
                currentNode = currentNode.next;
            }

            currentNode.next = new ListNode<T>(value);
        }
    }

    toString(): string {
        let contents: string = '';
        
        let currentNode: ListNode<T> | undefined= this.head;

        while (currentNode) {
            // add ", " between the nodes
            if (!currentNode.next) {
                contents += currentNode.value;
            } else {
                contents += currentNode.value + ', ';
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
class ListNode<T>{

    constructor(private _value: T, private _next?: ListNode<T>) {}

    get value():T {
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