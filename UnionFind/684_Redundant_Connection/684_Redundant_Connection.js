/**
 * @param {number[][]} edges
 * @return {number[]}
 */
function UnionFind(num) {
  this.par = new Map()
  this.rank = new Map()
  for (let i = 1; i < num + 1; i++) {
    this.par.set(i, i)
    this.rank.set(i, 0)
  }

  this.find = function (n) {
    let p = this.par.get(n)
    // find the root parent
    while (p !== this.par.get(p)) {
      // make parent of p to the parent(parent(p))
      // to save search complexity in the next find
      this.par.set(p, this.par.get(this.par.get(p)))
      p = this.par.get(p)
    }
    return p
  }

  this.union = function (n1, n2) {
    const p1 = this.find(n1)
    const p2 = this.find(n2)
    // if p1 == p2, they already in the same set and have a connection
    if (p1 == p2) {
      return false
    }

    // make tree with the smaller rank to the children of the one with higher rank
    if (this.rank.get(p1) > this.rank.get(p2)) {
      this.par.set(p2, p1)
    } else if (this.rank.get(p1) < this.rank.get(p2)) {
      this.par.set(p1, p2)
    } else {
      this.par.set(p2, p1)
      this.rank.set(p2, this.rank.get(p2) + 1)
    }
    return true
  }
}

var findRedundantConnection = function (edges) {
  const uf = new UnionFind(edges.length);
  for (let i = 0; i < edges.length; i++) {
    const [n1, n2] = edges[i]
    let res = uf.union(n1, n2)
    if (!res) {
      return edges[i]
    }
  }
};