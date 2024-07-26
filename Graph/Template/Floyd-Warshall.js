// node is 0-index based: 0 -> n-1

var shortestPathFullNode = function (n, edges) {
  const dist = Array.from({ length: n }, () => Array(n).fill(Infinity));

  // Set the distance from a city to itself to 0
  for (let i = 0; i < n; i++) {
    dist[i][i] = 0;
  }

  // Set the distance for each edge
  for (const [from, to, weight] of edges) {
    dist[from][to] = weight;
    dist[to][from] = weight; // Because the graph is bidirectional
  }

  // Floyd-Warshall algorithm to compute shortest paths
  for (let k = 0; k < n; k++) {
    for (let i = 0; i < n; i++) {
      for (let j = 0; j < n; j++) {
        if (dist[i][j] > dist[i][k] + dist[k][j]) {
          dist[i][j] = dist[i][k] + dist[k][j];
        }
      }
    }
  }
  return dist
}