class Graph {
  constructor() {
    this.adjacencyList = {};
  }

  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
  }

  removeVertex(vertex) {
    if (!this.adjacencyList[vertex]) return;
    for (const edge of this.adjacencyList[vertex]) {
      this.adjacencyList[edge] = this.adjacencyList[edge].filter(
        (v) => v !== vertex
      );
    }
    delete this.adjacencyList[vertex];
  }

  addEdge(v1, v2) {
    if (!this.adjacencyList[v1] || !this.adjacencyList[v2]) return;
    this.adjacencyList[v1].push(v2);
    this.adjacencyList[v2].push(v1);
  }

  removeEdge(v1, v2) {
    if (this.adjacencyList[v1] && this.adjacencyList[v2]) {
      let remove1 = this.adjacencyList[v1].indexOf(v2);
      let remove2 = this.adjacencyList[v2].indexOf(v1);
      if (remove1 !== -1 && remove2 !== -1) {
        this.adjacencyList[v1].splice(remove1, 1);
        this.adjacencyList[v2].splice(remove2, 1);
      }
    }
  }
  recursiveDepthFirstTraversal(vertex) {
    let vertices = [];
    let visited = {};

    const dfs = (vertex) => {
      if (!vertex) return null;
      if (!visited[vertex]) {
        visited[vertex] = true;
        vertices.push(vertex);
      }
      this.adjacencyList[vertex].forEach((child) => {
        if (!visited[child]) return dfs(child);
      });
    };

    dfs(vertex);
    return vertices;
  }
  iterativeDepthFirstTraversal(vertex) {
    let stack = [vertex];
    let visited = {};
    let vertices = [];
    let currentVertex;

    visited[vertex] = true;
    while (stack.length) {
      currentVertex = stack.pop();
      vertices.push(currentVertex);

      let children = this.adjacencyList[currentVertex];
      children.forEach((child) => {
        if (!visited[child]) {
          visited[child] = true;
          stack.push(child);
        }
      });
    }
    return vertices;
  }

  breadthFirstSearch(vertex) {
    let queue = [vertex];
    let visited = {};
    let vertices = [];
    let currentVertex;

    visited[vertex] = true;
    while (queue.length) {
      currentVertex = queue.shift();
      vertices.push(currentVertex);

      let children = this.adjacencyList[currentVertex];
      children.forEach((child) => {
        if (!visited[child]) {
          visited[child] = true;
          queue.push(child);
        }
      });
    }
    return vertices;
  }
}

let g = new Graph();
g.addVertex("A");
g.addVertex("B");
g.addVertex("C");
g.addVertex("D");
g.addVertex("E");
g.addVertex("F");

g.addEdge("A", "B");
g.addEdge("A", "C");
g.addEdge("B", "D");
g.addEdge("C", "E");
g.addEdge("D", "E");
g.addEdge("D", "F");
g.addEdge("E", "F");
