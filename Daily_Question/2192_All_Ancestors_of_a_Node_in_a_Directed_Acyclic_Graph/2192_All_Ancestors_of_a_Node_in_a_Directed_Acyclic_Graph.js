/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number[][]}
 */
var getAncestors = function (n, edges) {
  let map = new Map();
  for (let edge of edges) {
    if (!map.has(edge[1])) {
      map.set(edge[1], [])
    }
    map.set(edge[1], [...map.get(edge[1]), edge[0]])
  }

  function dfs(src, adj, visit, topSort) {
    if (visit.has(src)) {
      return;
    }
    visit.add(src)
    let arr = adj.has(src) ? adj.get(src) : []
    for (let nei of arr) {
      dfs(nei, adj, visit, topSort)
    }
    topSort.push(src)
    return;
  }

  const res = Array(n).fill(null).map((_, i) => {
    let topSort = [];
    let visit = new Set();
    dfs(i, map, visit, topSort);
    topSort.pop()
    return topSort.sort((a, b) => a - b)
  })

  return res
};