class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.length = 0;
    this.head = null;
  }

  //unshift
  push(val) {
    let newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length += 1;
    return this;
  }

  //shift
  pop() {
    if (!this.head) return null;
    let oldHead = this.head;
    this.head = oldHead.next;
    oldHead.next = null;
    this.length -= 1;
    return oldHead;
  }
}
