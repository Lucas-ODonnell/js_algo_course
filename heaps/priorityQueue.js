class Node {
  constructor(value, priority) {
    this.value = value;
    this.priority = priority < 11 ? priority : 10; //keeping the queue limited to 10
  }
}

//MinBinaryHeap
class PriorityQueue {
  #switchValues(idx1, idx2) {
    [
      ([this.values[idx1], this.values[idx2]] = [
        this.values[idx2],
        this.values[idx1],
      ]),
    ];
  }

  #bubbleUp() {
    let targetIdx = this.values.length - 1;
    let targetValue = this.values[targetIdx];
    while (targetIdx > 0) {
      let parentIdx = Math.floor((targetIdx - 1) / 2);
      let parentValue = this.values[parentIdx];
      if (parentValue.priority <= targetValue.priority) break;
      this.#switchValues(parentIdx, targetIdx);
      targetIdx = parentIdx;
    }
  }

  #bubbleDown() {
    let targetIdx = 0;
    while (true) {
      let leftIdx = targetIdx * 2 + 1;
      let rightIdx = targetIdx * 2 + 2;
      let leftValue =
        leftIdx < this.values.length
          ? this.values[leftIdx]
          : { value: null, priority: 11 };
      let rightValue =
        rightIdx < this.values.length
          ? this.values[rightIdx]
          : { value: null, priority: 11 };
      if (leftValue.priority === 11 && rightValue.priority === 11) break;
      let minIdx =
        leftValue.priority < rightValue.priority ? leftIdx : rightIdx;
      if (this.values[targetIdx].priority <= this.values[minIdx].priority) {
        break;
      }
      this.#switchValues(targetIdx, minIdx);
      targetIdx = minIdx;
    }
  }

  constructor() {
    this.values = [];
  }

  enqueue(value, priority) {
    let newNode = new Node(value, priority);
    this.values.push(newNode);
    this.#bubbleUp();
    return this.values;
  }

  dequeue() {
    if (this.values.length === 0) return;
    this.#switchValues(0, this.values.length - 1);
    let extractedMin = this.values.pop();
    this.#bubbleDown();
    return extractedMin;
  }
}

let priorityQueue = new PriorityQueue();
priorityQueue.enqueue("broken leg", 5);
priorityQueue.enqueue("stroke", 0);
priorityQueue.enqueue("cold", 10);
priorityQueue.enqueue("heart attack", 0);
priorityQueue.enqueue("lacerated kidney", 1);
priorityQueue.enqueue("drunk", 8);
priorityQueue.enqueue("paranoid from cannabis", 99);
priorityQueue.enqueue("shot in the stomach", 0);
