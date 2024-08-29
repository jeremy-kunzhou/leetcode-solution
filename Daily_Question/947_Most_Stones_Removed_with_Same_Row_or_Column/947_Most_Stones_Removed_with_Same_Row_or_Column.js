/**
 * @param {number[][]} stones
 * @return {number}
 */
var removeStones = function (stones) {
  // transfer to adj
  const N = stones.length;
  const adj = {}
  for (let i = 0; i < N; i++) {
    for (let j = i + 1; j < N; j++) {
      if (stones[i][0] == stones[j][0] || stones[i][1] == stones[j][1]) {
        if (!adj[i]) adj[i] = []
        if (!adj[j]) adj[j] = []
        adj[i].push(j)
        adj[j].push(i)
      }
    }
  }

  const visited = new Set();
  let count = 0;

  function dfs(node) {
    if (visited.has(node)) return
    visited.add(node)
    const list = adj[node] ?? []
    for (let n of list) {
      dfs(n)
    }
  }

  for (let i = 0; i < N; i++) {
    if (!visited.has(i)) {
      dfs(i)
      count++
    }
  }

  return stones.length - count
};