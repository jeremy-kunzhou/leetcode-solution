
// for leetcode
import { MinPriorityQueue } from '@datastructures-js/priority-queue';

// shortest path from one src to the rest of the node
// node is 1-indexed number 1 -> n
function shortestPath(edges, n, src) {
  let adj = {};
  for (let i = 1; i < n + 1; i++) {
    adj[i] = [];
  }
  for (let edge of edges) {
    let { n1, n2, weight } = edge;
    adj[n1].push([n2, weight]);
    adj[n2].push([n1, weight]);
  }

  let shortest = new Map();
  let minHeap = new MinPriorityQueue({
    priority: (item) => item[0]
  });
  minHeap.enqueue([0, src]);

  while (minHeap.front() !== null) {
    let [w1, n1] = minHeap.dequeue().element;
    if (shortest.has(n1)) {
      continue;
    }
    shortest.set(n1, w1);
    for (let pair of adj[n1]) {
      let [neighbor, w2] = pair;
      if (!shortest.has(neighbor)) {
        minHeap.enqueue([w1 + w2, neighbor]);
      }
    }
  }
  return shortest;
}
