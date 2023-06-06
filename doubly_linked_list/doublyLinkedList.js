class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.length = 0;
    this.head = null;
    this.tail = null;
  }

  push(val) {
    let newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }
    this.length += 1;
    return this;
  }

  pop() {
    if (!this.head) return undefined;
    let poppedNode = this.tail;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = poppedNode.prev;
      this.tail.next = null;
      poppedNode.prev = null;
    }
    this.length -= 1;
    return poppedNode;
  }

  shift() {
    if (!this.head) return undefined;
    let shiftedNode = this.head;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = shiftedNode.next;
      this.head.prev = null;
      shiftedNode.next = null;
    }
    this.length -= 1;
    return shiftedNode;
  }

  unshift(val) {
    let newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.head.prev = newNode;
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length += 1;
    return this;
  }

  get(pos) {
    if (pos < 0 || pos >= this.length) return null;
    let count, current;
    if (pos <= this.length / 2) {
      count = 0;
      current = this.head;
      while (count !== pos) {
        current = current.next;
        count += 1;
      }
    } else {
      count = this.length - 1;
      current = this.tail;
      while (count !== pos) {
        current = current.prev;
        count -= 1;
      }
    }
    return current;
  }

  set(pos, val) {
    let node = this.get(pos);
    if (node) {
      node.val = val;
      return true;
    }
    return false;
  }

  insert(pos, val) {
    if (pos < 0 || pos > this.length) return false;
    if (pos === 0) return !!this.unshift(val);
    if (pos === this.length) return !!this.push(val);
    let previousNode = this.get(pos - 1);
    let nextNode = previousNode.next;
    let newNode = new Node(val);
    previousNode.next = newNode;
    newNode.prev = previousNode;
    newNode.next = nextNode;
    nextNode.prev = newNode;
    this.length += 1;
    return true;
  }

  remove(pos) {
    if (pos < 0 || pos >= this.length) return false;
    if (pos === 0) return !!this.shift();
    if (pos === this.length - 1) return !!this.pop();
    let targetNode = this.get(pos);
    let prevNode = targetNode.prev;
    let nextNode = targetNode.next;
    prevNode.next = nextNode;
    nextNode.prev = prevNode;
    targetNode.next = null;
    targetNode.prev = null;
    this.length -= 1;
    return targetNode;
  }
}

let list = new DoublyLinkedList();
list.push(5);
list.push(6);
list.push(7);
list.push(8);
list.push(9);
list.push(10);
list.push(11);
list.push(12);
list.get(4);

console.log(list);
