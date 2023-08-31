class WeightedGraph {
  constructor() {
    this.adjacencyList = {};
  }
  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
  }

  removeVertex(vertex) {
    if (!this.adjacencyList[vertex]) return;
    for (const edge of this.adjacencyList[vertex]) {
      /*
       Here we are getting the edges of a specific vertex. They are objects in an array 
       We then need to go to the vertexes that are the edges of the vertex we are removing. We will do that by the edges node value. For example maybe edge.node is B so we will do this.adjacencyList[edge.node] which will give us the B vertex. 
       We then filter its edges to remove any indication of the vertex we are trying to delete 
       Finally after deleting references of our vertex we are trying to delete in edges we delete the vertex
        */
      this.adjacencyList[edge.node] = this.adjacencyList[edge.node].filter(
        (v) => v.node !== vertex
      );
    }
    delete this.adjacencyList[vertex];
  }

  addEdge(vertex1, vertex2, weight) {
    if (!this.adjacencyList[vertex1] || !this.adjacencyList[vertex2]) return;
    this.adjacencyList[vertex1].push({ node: vertex2, weight });
    this.adjacencyList[vertex2].push({ node: vertex1, weight });
  }

  removeEdge(vertex1, vertex2) {
    if (this.adjacencyList[vertex1] && this.adjacencyList[vertex2]) {
      this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(
        (array) => array.node !== vertex2
      );
      this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(
        (array) => array.node !== vertex1
      );
    }
  }

  recursiveDepthFirstTraversal(vertex) {
    let vertices = [];
    let visited = {};

    const dfs = (vertex) => {
      let current = { vertex: this.adjacencyList[vertex] };
      if (!vertex) return null;
      if (!visited[vertex]) {
        visited[vertex] = true;
        vertices.push(current);
      }
      this.adjacencyList[vertex].forEach((child) => {
        if (!visited[child.node]) return dfs(child.node);
      });
    };

    dfs(vertex);
    return vertices;
  }
}

let graph = new WeightedGraph();
graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addVertex("D");
graph.addVertex("E");
graph.addVertex("F");
graph.addVertex("G");
graph.addEdge("A", "B", 9);
graph.addEdge("A", "C", 12);
graph.addEdge("B", "C", 3);
graph.addEdge("A", "G", 23);
graph.addEdge("G", "B", 32);
graph.addEdge("D", "F", 322);
graph.addEdge("A", "D", 42);
graph.addEdge("C", "F", 15);
graph.addEdge("C", "G", 2);
graph.addEdge("B", "F", 1);
