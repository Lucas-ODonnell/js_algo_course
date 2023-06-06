class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.length = 0;
    this.head = null;
    this.tail = null;
  }

  push(val) {
    let newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    }
    this.tail.next = newNode;
    this.tail = newNode;
    this.length += 1;
    return this;
  }

  pop() {
    if (!this.head) return undefined;
    let current = this.head;
    let newTail = current;
    while (current.next) {
      newTail = current;
      current = current.next;
    }
    this.tail = newTail;
    this.tail.next = null;
    this.length -= 1;
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    return current;
  }

  shift() {
    if (!this.head) return undefined;
    let currentHead = this.head;
    this.head = currentHead.next;
    this.length -= 1;
    return currentHead;
  }

  unshift(val) {
    let newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length += 1;
    return this;
  }

  get(pos) {
    if (pos < 0 || pos >= this.length) return null;
    let count = 0;
    let current = this.head;
    while (count !== pos) {
      current = current.next;
      count += 1;
    }
    return current;
  }

  set(pos, val) {
    let targetNode = this.get(pos);
    if (targetNode) {
      targetNode.val = val;
      return true;
    }
    return false;
  }

  insert(pos, val) {
    if (pos < 0 || pos > this.length) return false;
    if (pos === this.length) return !!this.push(val);
    if (pos === 0) return !!this.unshift(val);

    let newNode = new Node(val);
    let previousNode = this.get(pos - 1);
    let temp = previousNode.next;
    previousNode.next = newNode;
    newNode.next = temp;
    this.length += 1;
    return true;
  }

  remove(pos) {
    if (pos < 0 || pos > this.length) return undefined;
    if (pos === this.length - 1) return !!this.pop();
    if (pos === 0) return !!this.shift();
    let previousNode = this.get(pos - 1);
    let removed = previousNode.next;
    previousNode.next = removed.next;
    this.length -= 1;
    return removed;
  }

  reverse() {
    let node = this.head;
    this.head = this.tail;
    this.tail = node;
    let previous = null;
    let next;
    for (let i = 0; i < this.length; i++) {
      next = node.next;
      node.next = previous;
      previous = node;
      node = next;
    }
    return node;
  }
  print() {
    let arr = [];
    let current = this.head;
    while (current) {
      arr.push(current.val);
      current = current.next;
    }
    console.log(arr);
  }
}

let list = new SinglyLinkedList();
list.push(100);
list.push(200);
list.push(300);
list.push(400);
list.push(500);
list.print();
list.reverse();
list.print();
