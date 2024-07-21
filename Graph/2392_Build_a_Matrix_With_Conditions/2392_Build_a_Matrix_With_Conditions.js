/**
 * @param {number} k
 * @param {number[][]} rowConditions
 * @param {number[][]} colConditions
 * @return {number[][]}
 */

class TopologySort {
  constructor(k, conditions) {
    this.adj = new Map()
    this.k = k
    for (const c of conditions) {
      if (!this.adj.has(c[0])) {
        this.adj.set(c[0], [])
      }
      this.adj.get(c[0]).push(c[1])
    }
  }

  sort() {
    const topSort = []
    const visiting = new Set()
    const visited = new Set()
    const classThis = this
    function dfs(node) {
      if (visited.has(node)) return true
      if (visiting.has(node)) return false // found loop

      visiting.add(node)

      if (classThis.adj.has(node)) {
        for (const n of classThis.adj.get(node)) {
          if (!dfs(n)) return false // found loop
        }
      }

      visiting.delete(node)
      visited.add(node)
      topSort.push(node)
      return true
    }

    for (let i = 1; i <= this.k; i++) {
      if (!dfs(i)) return [] // found loop return empty array
    }
    topSort.reverse()
    return topSort
  }
}
var buildMatrix = function (k, rowConditions, colConditions) {
  const rT = new TopologySort(k, rowConditions)
  const cT = new TopologySort(k, colConditions)
  const orderR = rT.sort()
  const orderC = cT.sort()
  if (orderR.length == 0 || orderC.length == 0) return []
  const positionMap = {}
  orderR.forEach((v, i) => {
    positionMap[v] = i
  })
  const matrix = Array(k).fill(0).map(_ => Array(k).fill(0))
  orderC.forEach((v, i) => {
    matrix[positionMap[v]][i] = v
  })
  return matrix
};