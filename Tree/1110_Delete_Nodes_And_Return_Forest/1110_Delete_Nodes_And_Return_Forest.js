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
 * @param {number[]} to_delete
 * @return {TreeNode[]}
 * dfs to get nodeMap and nodeParent
 * dfs in post-order-traversal to remove relationship and parental-ship 
 * if node val not in to_delete and parent of node is null, add node to res set
 * return res set in array
 * 
 */

var delNodes = function (root, to_delete) {
  let nodeMap = new Map()
  let nodeParent = new Map()
  to_delete = new Set(to_delete)
  const res = new Set()
  function dfsNode(node, p) {
    if (!node) return
    nodeMap.set(node.val, node)
    nodeParent.set(node.val, p)
    dfsNode(node.left, node)
    dfsNode(node.right, node)
  }

  dfsNode(root)

  function dfsDelete(node, p) {
    if (node == null) return

    dfsDelete(node.left, node)
    dfsDelete(node.right, node)

    if (to_delete.has(p?.val) || !p) {
      nodeParent.set(node.val, null)
      if (!to_delete.has(node.val)) {
        res.add(node)
      }
    }
    if (to_delete.has(node.left?.val)) {
      node.left = null
    }
    if (to_delete.has(node.right?.val)) {
      node.right = null
    }
  }

  dfsDelete(root, null)


  return [...res]

};