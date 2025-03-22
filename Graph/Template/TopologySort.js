
class TopologySort {
  constructor(k, conditions) {
    this.adj = new Map()
    this.indegree = new Map()
    this.k = k
    for (let i = 0; i < k; i++) {
      this.adj.set(i, [])
      this.indegree.set(i, 0)
    }
    for (const c of conditions) {
      this.adj.get(c[0]).push(c[1])
      this.indegree.set(c[1], this.indegree.get(c[1]) + 1)
    }
  }

  kahn() {
    const topSort = []
    const dequeue = [];
    for (const [key, value] of this.indegree.entries()) {
      if (value == 0) {
        dequeue.push(key)
      }
    }

    while (dequeue.length > 0) {
      const node = dequeue.shift();
      topSort.push(node)

      for (const nei of this.adj.get(node)) {
        this.indegree.set(nei, this.indegree.get(nei) - 1)
        if (this.indegree.get(nei) == 0) {
          dequeue.push(nei)
        }
      }
    }

    if (topSort.length != this.k) {
      console.log('Found Graph Cycle!')
      return []
    }

    return topSort
  }

  dfsSort() {
    const topSort = []
    const path = new Set()
    const visited = new Set()
    const classThis = this
    function dfs(node) {
      if (visited.has(node)) return true
      if (path.has(node)) return false // found loop

      path.add(node)

      if (classThis.adj.has(node)) {
        for (const n of classThis.adj.get(node)) {
          if (!dfs(n)) return false // found loop
        }
      }

      path.delete(node)
      visited.add(node)
      topSort.push(node)
      return true
    }

    for (let i = 0; i < this.k; i++) {
      if (!dfs(i)) {
        console.log('Found Graph Cycle!')
        return [] // found loop return empty array
      }
    }
    topSort.reverse()
    return topSort
  }
}

module.exports = { TopologySort }