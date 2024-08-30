/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number} source
 * @param {number} destination
 * @param {number} target
 * @return {number[][]}
 */
var modifiedGraphEdges = function (n, edges, source, destination, target) {
  const adj = {}
  const MAX = 2 * 10 ** 9
  for (let i = 0; i < n; i++) {
    adj[i] = {}
  }
  for (const edge of edges) {
    if (edge[2] != -1) {
      adj[edge[0]][edge[1]] = edge[2]
      adj[edge[1]][edge[0]] = edge[2]
    }
  }

  function dijkstra(s, d) {
    const visited = new Set();
    const minHeap = new MinPriorityQueue({ priority: (a) => a[0] })
    minHeap.enqueue([0, s])
    while (minHeap.size() > 0) {
      const [w1, n1] = minHeap.dequeue().element
      if (visited.has(n1)) {
        continue
      }
      visited.add(n1)
      if (n1 == d) {
        return w1
      }
      let neighbours = Object.keys(adj[n1])
      for (let n2 of neighbours) {
        if (!visited.has(n2)) {
          minHeap.enqueue([w1 + adj[n1][n2], n2])
        }
      }
    }
    return MAX
  }

  let shortest = dijkstra(source, destination)
  if (shortest < target) {
    return []
  }

  for (const edge of edges) {
    if (edge[2] != -1) continue

    if (shortest == target) {
      edge[2] = MAX
      continue
    }

    // add new path to the graph
    edge[2] = 1
    adj[edge[0]][edge[1]] = 1
    adj[edge[1]][edge[0]] = 1

    shortest = dijkstra(source, destination)
    // if found the shortest path, fill the edge to the difference + 1
    // no need to update adj, because no need to calc dijkstra again
    if (shortest <= target) {
      edge[2] = target - shortest + 1
      shortest = target
    }
  }

  return shortest == target ? edges : []
};