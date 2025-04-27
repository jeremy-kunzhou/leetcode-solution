
// for leetcode
const { PriorityQueue } = require('../../Heap/Template/priorityQueue.js');

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
  let minHeap = new PriorityQueue((a, b) => a[0] - b[0]);
  minHeap.enqueue([0, src]);

  while (minHeap.front() !== null) {
    let [w1, n1] = minHeap.dequeue();
    //
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

function shortestPathV2(edges, n, src, desc) {
  let adj = {};
  for (let i = 1; i < n + 1; i++) {
    adj[i] = [];
  }
  for (let edge of edges) {
    let { n1, n2, weight } = edge;
    adj[n1].push([n2, weight]);
    adj[n2].push([n1, weight]);
  }

  function getPath(parent, src, desc) {
    let path = [];
    let cur = desc;
    while (cur !== -1) {
      path.push(cur);
      cur = parent[cur];
      if (cur === src) {
        path.push(src);
        break;
      }
    }
    path.reverse();
    return path;
  }

  const distance = Array(n + 1).fill(Infinity);
  const visited = Array(n + 1).fill(false);
  const parent = Array(n + 1).fill(-1);
  distance[src] = 0;

  for (let i = 0; i < n; i++) {
    // find the node with the minimum distance
    // and not visited
    let minDistance = Infinity;
    let u = undefined;
    for (let node = 1; node <= n; node++) {
      if (!visited[node] && distance[node] < minDistance) {
        minDistance = distance[node];
        u = node;
      }
    }
    if (u === undefined || u === desc) {
      // all nodes are visited or we reach the destination
      // we can stop the loop
      break;
    }
    // mark the node as visited
    visited[u] = true;
    // update the distance of the neighbors
    for (let pair of adj[u]) {
      let [neighbor, w2] = pair;
      if (!visited[neighbor] && distance[u] + w2 < distance[neighbor]) {
        distance[neighbor] = distance[u] + w2;
        parent[neighbor] = u;
      }
    }
  }
  return { distance, path: desc !== undefined ? getPath(parent, src, desc) : parent };
}

module.exports = { shortestPath, shortestPathV2 };