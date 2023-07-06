class MaxBinaryHeap {
  #switchValues(idx1, idx2) {
    [
      ([this.values[idx1], this.values[idx2]] = [
        this.values[idx2],
        this.values[idx1],
      ]),
    ];
  }

  #bubbleUp() {
    let childIndex = this.values.length - 1;
    let childValue = this.values[childIndex];
    while (childIndex > 0) {
      let parentIndex = Math.floor((childIndex - 1) / 2);
      let parentValue = this.values[parentIndex];
      if (childValue <= parentValue) break;
      this.#switchValues(parentIndex, childIndex);
      childIndex = parentIndex;
    }
  }

  #bubbleDown() {
    let initIdx = 0;
    while (true) {
      let leftIdx = initIdx * 2 + 1;
      let rightIdx = initIdx * 2 + 2;
      let leftValue =
        leftIdx < this.values.length ? this.values[leftIdx] : null;
      let rightValue =
        rightIdx < this.values.length ? this.values[rightIdx] : null;
      if (leftValue === null && rightValue === null) break;
      let maxIdx = leftValue < rightValue ? rightIdx : leftIdx;
      if (this.values[initIdx] > this.values[maxIdx]) break;
      this.#switchValues(initIdx, maxIdx);
      initIdx = maxIdx;
    }
  }

  constructor() {
    this.values = [];
  }

  insert(value) {
    this.values.push(value);
    this.#bubbleUp();
    return this.values;
  }

  extractMax() {
    if (this.values.length === 0) return;
    this.#switchValues(0, this.values.length - 1);
    let extractedMax = this.values.pop();
    this.#bubbleDown();
    return extractedMax;
  }
}

let maxBinaryHeap = new MaxBinaryHeap();
maxBinaryHeap.values = [41, 39, 33, 18, 27, 12];
maxBinaryHeap.insert(55);
maxBinaryHeap.insert(37);
maxBinaryHeap.insert(22);
maxBinaryHeap.insert(44);
maxBinaryHeap.insert(2134);
