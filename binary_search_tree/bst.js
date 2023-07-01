class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insertIterative(value) {
    let newNode = new Node(value);
    if (this.root === null) this.root = newNode;

    let currentPosition = this.root;
    while (true) {
      if (currentPosition.value === value) return undefined;
      if (value < currentPosition.value) {
        currentPosition.left === null
          ? (currentPosition.left = newNode)
          : (currentPosition = currentPosition.left);
      } else if (value > currentPosition.value) {
        return currentPosition.right === null
          ? (currentPosition.right = newNode)
          : (currentPosition = currentPosition.right);
      }
    }
  }

  insert(value, currentNode = this.root) {
    let newNode = new Node(value);
    if (this.root === null) return (this.root = newNode);
    if (currentNode.value === value) return undefined;
    if (value < currentNode.value) {
      return currentNode.left === null
        ? (currentNode.left = newNode)
        : this.insert(value, currentNode.left);
    } else if (value > currentNode.value) {
      return currentNode.right === null
        ? (currentNode.right = newNode)
        : this.insert(value, currentNode.right);
    }
  }

  find(value, currentNode = this.root) {
    if (this.root === null) return null;
    if (currentNode.value === value) return currentNode;
    if (value < currentNode.value) {
      return currentNode.left === null
        ? null
        : this.find(value, currentNode.left);
    } else if (value > currentNode.value) {
      return currentNode.right === null
        ? null
        : this.find(value, currentNode.right);
    }
  }

  bfs() {
    if (this.root === null) return null;
    let sortedArray = [];
    let queue = [this.root];
    let currentNode;
    while (queue.length) {
      currentNode = queue.shift();
      sortedArray.push(currentNode.value);
      if (currentNode.left) queue.push(currentNode.left);
      if (currentNode.right) queue.push(currentNode.right);
    }
    return sortedArray;
  }

  preOrderTraversal() {
    if (this.root === null) return null;
    let sortedArray = [];
    let current = this.root;

    const traversal = (current) => {
      sortedArray.push(current.value);
      if (current.left !== null) traversal(current.left);
      if (current.right !== null) traversal(current.right);
    };

    traversal(current);
    return sortedArray;
  }

  postOrderTraversal() {
    if (this.root === null) return null;
    let sortedArray = [];
    let current = this.root;

    const traversal = (current) => {
      if (current.left !== null) traversal(current.left);
      if (current.right !== null) traversal(current.right);
      sortedArray.push(current.value);
    };

    traversal(current);
    return sortedArray;
  }

  inOrderTraversal() {
    if (this.root === null) return null;
    let sortedArray = [];
    let current = this.root;

    const traversal = (current) => {
      if (current.left !== null) traversal(current.left);
      sortedArray.push(current.value);
      if (current.right !== null) traversal(current.right);
    };

    traversal(current);
    return sortedArray;
  }
}

let bst = new BinarySearchTree();
bst.insert(10);
bst.insert(6);
bst.insert(15);
bst.insert(3);
bst.insert(8);
bst.insert(20);
