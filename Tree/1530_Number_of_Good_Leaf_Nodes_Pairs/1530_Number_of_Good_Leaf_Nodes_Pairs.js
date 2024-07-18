/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} distance
 * @return {number}
 * get all leaves
 * get pair: get lca, and shortest path, 
 *           compare with the distance. if shorter or equal to distance, res ++
 */
// TLE at 62th testcase
var countPairsOrigin = function (root, distance) {
  function lca(node, n1, n2) {
    if (!node || node == n1 || node == n2) return node
    let l = lca(node.left, n1, n2)
    let r = lca(node.right, n1, n2)
    return (l && r) ? node : (l || r)
  }

  let leafList = []
  function getLeaf(node) {
    if (!node) return
    if (!node.left && !node.right) {
      leafList.push(node)
    } else {
      getLeaf(node.left)
      getLeaf(node.right)
    }
  }
  getLeaf(root)

  function getDepth(node, t, depth) {
    if (!node) return 0;
    if (node == t) return depth;
    return getDepth(node.left, t, depth + 1) || getDepth(node.right, t, depth + 1)
  }

  let res = 0
  for (let i = 0; i < leafList.length; i++) {
    for (let j = i + 1; j < leafList.length; j++) {
      let n1 = leafList[i]
      let n2 = leafList[j]
      let ancestor = lca(root, n1, n2)

      let pathLength = getDepth(ancestor, n1, 0) + getDepth(ancestor, n2, 0)
      if (pathLength <= distance) res++

    }
  }
  return res
};

// turn tree to adj map
// get leaves
// run dfs on each leaf until reach other leaf node or exceed the distance
var countPairs = function (root, distance) {
  const adj = new Map()
  const leaves = new Set()
  function toMap(node, p) {
    if (!node) return
    let list = []
    if (p) {
      list.push(p)
    }
    if (node.left) {
      list.push(node.left)
    }
    if (node.right) {
      list.push(node.right)
    }
    if (!node.left && !node.right) {
      leaves.add(node)
    }
    adj.set(node, list)
    toMap(node.left, node)
    toMap(node.right, node)
  }
  toMap(root, null)

  let res = 0
  let visited = new Set()
  function dfs(o, node, length) {
    if (!node) return
    if (length > distance) return
    if (node !== o && leaves.has(node)) {
      res++
      return
    }
    if (visited.has(node)) return
    visited.add(node)
    let list = adj.get(node) || []
    for (let ngb of list) {
      dfs(o, ngb, length + 1)
    }
    visited.delete(node)
  }
  for (const leaf of [...leaves]) {
    visited = new Set()
    dfs(leaf, leaf, 0)

  }
  return res / 2
}