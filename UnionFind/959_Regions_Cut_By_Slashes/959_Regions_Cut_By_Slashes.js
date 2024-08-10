/**
 * @param {string[]} grid
 * @return {number}
 * UnionFind
 * the ceil has four nodes: top, right, bottom, left.
 * each node is connected with this relationship:
 * when ' '
 *    - top - right; top - left
 *    - bottom - right; bottom - left
 * when '/'
 *    - top - left;
 *    - bottom - right;
 * when '\'
 *    - top - right;
 *    - bottom - left;
 * they all connected with neighbours nodes via the adjcent edge
 *      
 *              bottom
 *               ----
 *               top
 * 
 * right | left       right | left
 *
 *              bottom
 *               ----
 *               top
 * 
 */

class UnionFind {
  constructor(n) {
      this.p = {}
      this.height = {}
      for (let i = 0; i < n; i++) {
          this.p[i] = i
          this.height[i] = 1
      }
  }

  findP(n) {
      let currP = this.p[n]
      while (currP !== this.p[this.p[currP]]) {
          currP = this.p[currP]
          this.p[currP] = this.p[this.p[currP]]
      }
      return currP
  }

  addEdge(n1, n2) {
      let p1 = this.findP(n1), p2 = this.findP(n2)
      if (p1 == p2) {
          return false
      }

      let h1 = this.height[p1], h2 = this.height[p2]
      if (h1 > h2) {
          this.p[p2] = p1
      } else if (h1 < h2) {
          this.p[p1] = p2
      } else {
          this.p[p1] = p2
          this.height[p2]++
      }
      return true
  }
}

var regionsBySlashes = function (grid) {
  const n = grid.length
  const totalCount = grid.length * grid.length * 4;
  const uf = new UnionFind(totalCount)

  for (let i = 0; i < n; i++) {
      for (let j = 0; j < n; j++) {
          const ch = grid[i][j]
          const topIdx = i * n * 4 + j * 4
          const rightIdx = topIdx + 1;
          const bottomIdx = topIdx + 2;
          const leftIdx = topIdx + 3;

          if (ch == ' ') {
              // top - right
              uf.addEdge(topIdx, rightIdx)
              // top - left
              uf.addEdge(topIdx, leftIdx)
              // bottom - right
              uf.addEdge(bottomIdx, rightIdx)
              // bottom - left
              uf.addEdge(bottomIdx, leftIdx)
          } else if (ch == '/') {
              // top - left
              uf.addEdge(topIdx, leftIdx)
              // bottom - right
              uf.addEdge(bottomIdx, rightIdx)
          } else { // ch == '\'
              // top - right
              uf.addEdge(topIdx, rightIdx)
              // bottom - left
              uf.addEdge(bottomIdx, leftIdx)
          }
          // to the left node of node on the right(j+1)
          if (j + 1 < n) {
              uf.addEdge(rightIdx, (i * n * 4 + (j + 1) * 4 + 3))
          }
          // to the top node of node under
          if (i + 1 < n) {
              uf.addEdge(bottomIdx, ((i + 1) * n * 4 + j * 4))
          }
      }
  }

  const pSet = new Set()
  for (let i = 0; i < n; i++) {
      for (let j = 0; j < n; j++) {
          for (let k = 0; k < 4; k++) {
              pSet.add(uf.findP((i * n * 4 + j * 4) + k))
          }
      }
  }
  return pSet.size


};