class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.length = 0;
    this.head = null;
    this.tail = null;
  }

  enqueue(val) {
    let newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length += 1;
    return this;
  }

  dequeue() {
    if (!this.head) return null;
    let oldHead = this.head;
    this.head = oldHead.next;
    oldHead.next = null;
    this.length -= 1;
    return oldHead;
  }
}
