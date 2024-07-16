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
 * @param {number} startValue
 * @param {number} destValue
 * @return {string}
 * 1
 * turn the tree to adj graph with relationship (U, L, R)
 * turn shortest path algorithm on this adj graph
 * based on shortest path, use adj graph to generate result 
 * 2 
 * there must be same parent node shared by the s or d (the parent could be s or d itself)
 * based on s or d in which child, trace down to the child. if s, reverse to U
 */
var getDirections = function (root, startValue, destValue) {
  let startNode = null
  let desNode = null
  let sharedAncestor = null
  let sharedAncestorLevel = -Number.MAX_SAFE_INTEGER
  let res = ''
  function getSharedAncestor(node, level) {
    if (node == null) {
      return [null, null]
    }
    if (node.val == startValue) {
      startNode = node;
      let a = getSharedAncestor(node.left, level + 1)
      let b = getSharedAncestor(node.right, level + 1)
      if ((a[1] != null || b[1] != null) && sharedAncestorLevel < level) {
        sharedAncestor = node
        sharedAncestorLevel = level
        res = ['', a[1] != null ? 'L' + a[1] : b[1] != null ? 'R' + b[1] : null].join('')
      }
      return ['', a[1] != null ? 'L' + a[1] : b[1] != null ? 'R' + b[1] : null]
    } else if (node.val == destValue) {
      desNode = node;
      let a = getSharedAncestor(node.left, level + 1)
      let b = getSharedAncestor(node.right, level + 1)
      if ((a[0] != null || b[0] != null) && sharedAncestorLevel < level) {
        sharedAncestor = node
        sharedAncestorLevel = level
        res = [a[0] != null ? 'U' + a[0] : b[0] != null ? 'U' + b[0] : null, ''].join('')
      }
      return [a[0] != null ? 'U' + a[0] : b[0] != null ? 'U' + b[0] : null, '']
    } else {
      let a = getSharedAncestor(node.left, level + 1)
      let b = getSharedAncestor(node.right, level + 1)
      if ((a[0] != null || b[0] != null) && (a[1] != null || b[1] != null) && sharedAncestorLevel < level) {
        sharedAncestor = node
        sharedAncestorLevel = level
        res = [a[0] != null ? 'U' + a[0] : b[0] != null ? 'U' + b[0] : null, a[1] != null ? 'L' + a[1] : b[1] != null ? 'R' + b[1] : null].join('')
      }
      return [a[0] != null ? 'U' + a[0] : b[0] != null ? 'U' + b[0] : null, a[1] != null ? 'L' + a[1] : b[1] != null ? 'R' + b[1] : null]
    }
  }
  getSharedAncestor(root, 0)
  return res
};