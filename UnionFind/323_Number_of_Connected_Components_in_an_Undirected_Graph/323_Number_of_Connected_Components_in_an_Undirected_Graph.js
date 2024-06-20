class UnionFind {
  constructor(nums) {
    this.par = new Map();
    this.rank = new Map();
    for (let i = 0; i < nums; i++) {
      this.par.set(i, i)
      this.rank.set(i, 0)
    }
  }

  find(n) {
    let p = this.par.get(n)
    while (p != this.par.get(p)) {
      this.par.set(p, this.par.get(p))
      p = this.par.get(p)
    }
    return p
  }

  union(n1, n2) {
    let [p1, p2] = [this.find(n1), this.find(n2)]
    if (p1 == p2) {
      return false
    }

    if (this.rank.get(p1) > this.rank.get(p2)) {
      this.par.set(p2, p1)
    } else if (this.rank.get(p2) > this.rank.get(p1)) {
      this.par.set(p1, p2)
    } else {
      this.par.set(p2, p1)
      this.rank.set(p1, this.rank.get(p1) + 1)
    }
    return true
  }
}

class Solution {
  /**
   * @param {number} n
   * @param {number[][]} edges
   * @returns {number}
   */
  countComponents(n, edges) {
    const uf = new UnionFind(n)
    edges.forEach(e => uf.union(...e))
    const set = new Set();
    for (let i = 0; i < n; i++) {
      set.add(uf.find(i))
    }
    return [...set.values()].length
  }
}
