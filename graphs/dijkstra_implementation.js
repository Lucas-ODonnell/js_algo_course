class PriorityQueue {
  constructor() {
    this.values = [];
  }

  switchValues(idx1, idx2) {
    [
      ([this.values[idx1], this.values[idx2]] = [
        this.values[idx2],
        this.values[idx1],
      ]),
    ];
  }

  bubbleUp() {
    let idx = this.values.length - 1;
    const element = this.values[idx];
    while (idx > 0) {
      let parentIdx = Math.floor((idx - 1) / 2);
      let parent = this.values[parentIdx];
      if (element.priority >= parent.priority) break;
      this.switchValues(parentIdx, idx);
      idx = parentIdx;
    }
  }

  bubbleDown() {
    let idx = 0;
    const length = this.values.length;
    const element = this.values[0];
    while (true) {
      let leftChildIdx = 2 * idx + 1;
      let rightChildIdx = 2 * idx + 2;
      let leftChild, rightChild;
      let minIdx = null;
      if (leftChildIdx < length) {
        leftChild = this.values[leftChildIdx];
        if (leftChild.priority < element.priority) {
          minIdx = leftChildIdx;
        }
      }
      if (rightChildIdx < length) {
        rightChild = this.values[rightChildIdx];
        if (
          (minIdx === null && rightChild.priority < element.priority) ||
          (minIdx !== null && rightChild.priority < leftChild.priority)
        ) {
          minIdx = rightChildIdx;
        }
      }
      if (minIdx === null) break;
      this.switchValues(idx, minIdx);
      idx = minIdx;
    }
  }

  enqueue(val, priority) {
    let newNode = new Node(val, priority);
    this.values.push(newNode);
    this.bubbleUp();
  }

  dequeue() {
    const min = this.values[0];
    const end = this.values.pop();
    if (this.values.length > 0) {
      this.values[0] = end;
      this.bubbleDown();
      return min;
    }
  }
}

class Node {
  constructor(value, priority) {
    this.value = value;
    this.priority = priority;
  }
}

class WeightedGraph {
  constructor() {
    this.adjacencyList = {};
  }

  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
  }

  addEdge(vertex1, vertex2, weight) {
    if (!this.adjacencyList[vertex1] || !this.adjacencyList[vertex2]) return;
    this.adjacencyList[vertex1].push({ node: vertex2, weight });
    this.adjacencyList[vertex2].push({ node: vertex1, weight });
  }

  dijkstra_sortest_path(start, destination) {
    const visited = new PriorityQueue();
    const distances = {};
    const previous = {};
    let answer = [];
    for (let vertex in this.adjacencyList) {
      if (vertex === start) {
        distances[vertex] = 0;
        visited.enqueue(vertex, 0);
      } else {
        distances[vertex] = Infinity;
        visited.enqueue(vertex, Infinity);
      }
    }
    while (visited.values.length) {
      let smallestVertex = visited.dequeue().value;
      if (smallestVertex === destination) {
        while (previous[smallestVertex]) {
          answer.push(smallestVertex);
          smallestVertex = previous[smallestVertex];
        }
        break;
      }
      if (smallestVertex || distances[smallestVertex] !== Infinity) {
        for (let edge in this.adjacencyList[smallestVertex]) {
          //find neighboring nodes
          let nextNode = this.adjacencyList[smallestVertex][edge];
          //calculate new distance to neighboring node
          let candidate = distances[smallestVertex] + nextNode.weight;
          let nextNeighbor = nextNode.node; //the letter
          if (candidate < distances[nextNeighbor]) {
            //updating new smallest distance to neighbor
            distances[nextNeighbor] = candidate;
            //updating previous - Path we took to the next neighbor
            previous[nextNeighbor] = smallestVertex;
            //enqueue in priority queue with new priority
            visited.enqueue(nextNeighbor, candidate);
          }
        }
      }
    }
    return answer.concat(start).reverse();
  }
}

let graph = new WeightedGraph();
graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addVertex("D");
graph.addVertex("E");
graph.addVertex("F");

graph.addEdge("A", "B", 4);
graph.addEdge("A", "C", 2);
graph.addEdge("B", "E", 3);
graph.addEdge("C", "D", 2);
graph.addEdge("C", "F", 4);
graph.addEdge("D", "E", 3);
graph.addEdge("D", "F", 1);
graph.addEdge("E", "F", 1);
