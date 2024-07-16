// TreeNode Structure
function TreeNode(val, left, right) {
  this.val = (val === undefined ? 0 : val)
  this.left = (left === undefined ? null : left)
  this.right = (right === undefined ? null : right)
}


// least common ancestor
const findLCA = (node, value1, value2) => {
  if (!node || node.val == value1 || node.val == value2) return node
  const left = findLCA(node.left)
  const right = findLCA(node.right)
  return (left && right) ? node : left || right
}

// depth
const findDepth = (node, value, count = 0) => {
  if (!node) return 0
  if (node.val === value) return count
  return findDepth(node.left, count + 1) ||
    findDepth(node.right, count + 1)
}

// path
const findPath = (node, value, str = '') => {
  if (!node) return ''
  if (node.val === value) return str
  return findPath(node.left, value, str + 'L') ||
    findPath(node.right, value, str + 'R')
}