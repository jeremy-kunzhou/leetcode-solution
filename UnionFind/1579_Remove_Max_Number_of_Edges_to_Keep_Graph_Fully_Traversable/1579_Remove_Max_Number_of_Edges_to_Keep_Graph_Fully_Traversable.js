/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number}
 * UnionFind
 */

class UnionFind {
  constructor(n) {
    this.par = Array(n + 1).fill(-1)
    this.height = Array(n + 1).fill(0)
    for (let i = 1; i < n + 1; i++) {
      this.par[i] = i
    }
  }

  find(n) {
    let par = this.par[n];
    while (par != this.par[par]) {
      this.par[par] = this.par[this.par[par]]
      par = this.par[par]
    }
    return par
  }

  union(n1, n2) {
    const [p1, p2] = [this.find(n1), this.find(n2)]
    if (p1 == p2) {
      return false
    }
    const [h1, h2] = [this.height[p1], this.height[p2]]
    if (h1 > h2) {
      this.par[p2] = p1
    } else if (h1 < h2) {
      this.par[p1] = p2
    } else {
      this.par[p2] = p1
      this.height[p1]++;
    }
    return true
  }
}
var maxNumEdgesToRemove = function (n, edges) {
  let count = 0
  let bobUf = new UnionFind(n)
  for (let edge of edges) {
    if (edge[0] == 3) {
      const res = bobUf.union(edge[1], edge[2])
      if (!res) {
        count++
      }
    }
  }
  for (let edge of edges) {
    if (edge[0] == 2) {
      const res = bobUf.union(edge[1], edge[2])
      if (!res) {
        count++
      }
    }
  }
  let aliceUf = new UnionFind(n)
  for (let edge of edges) {
    if (edge[0] == 3) {
      const res = aliceUf.union(edge[1], edge[2])
      // already count in bob's round
      // if (!res) {
      //     count++
      // }
    }
  }
  for (let edge of edges) {
    if (edge[0] == 1) {
      const res = aliceUf.union(edge[1], edge[2])
      if (!res) {
        count++
      }
    }
  }
  let apar = aliceUf.find(1)
  let a = aliceUf.par.slice(1).some((_, idx) => aliceUf.find(idx + 1) != apar)
  let bpar = bobUf.find(1)
  let b = bobUf.par.slice(1).some((_, idx) => bobUf.find(idx + 1) != bpar)
  return (a || b) ? -1 : count
};