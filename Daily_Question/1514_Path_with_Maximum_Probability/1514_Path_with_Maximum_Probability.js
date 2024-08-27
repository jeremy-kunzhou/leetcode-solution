/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number[]} succProb
 * @param {number} start_node
 * @param {number} end_node
 * @return {number}
 */
var maxProbability = function (n, edges, succProb, start_node, end_node) {
  const maxHeap = new MaxPriorityQueue({ priority: (a) => a[0] })
  const lpath = {}
  const adj = {}
  // edges to adj
  for (let i = 0; i < n; i++) {
    adj[i] = []
  }

  for (let i = 0; i < edges.length; i++) {
    adj[edges[i][0]].push([succProb[i], edges[i][1]])
    adj[edges[i][1]].push([succProb[i], edges[i][0]])
  }

  const visited = new Set();
  maxHeap.enqueue([1, start_node])
  while (maxHeap.size() > 0) {
    const [w1, n1] = maxHeap.dequeue().element
    if (lpath.hasOwnProperty(n1)) {
      continue
    }
    lpath[n1] = w1;
    const adjNodes = adj[n1] ?? []
    for (let n of adjNodes) {
      const [w2, n2] = n;
      if (!lpath.hasOwnProperty(n2)) {
        maxHeap.enqueue([w2 * w1, n2])
      }
    }
  }

  return lpath[end_node] ?? 0.0
};