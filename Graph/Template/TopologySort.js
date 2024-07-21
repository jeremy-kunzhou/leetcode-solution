
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