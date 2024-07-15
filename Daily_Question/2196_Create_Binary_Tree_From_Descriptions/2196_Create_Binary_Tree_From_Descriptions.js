/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[][]} descriptions
 * @return {TreeNode}
 * intuition
 * node hashmap to mapping value to node
 * root candidate hashmap to store root candidate
 * if parent in hashmap, retreet the parent node, else, create parent node then set to hashmap
 * if child in hashmap, retreet the child node, else, create child node then set to hashmap
 * based on isLeft, set child node to the left or right of the parent
 * if parent node not in root candidate, add it and set value to 1
 * in root candidate, set child node to 0
 *
 * TC: O(n)
 * SC: O(n)
 */
var createBinaryTree = function (descriptions) {
  let nodeMap = new Map()
  let rootMap = new Map()
  for (const des of descriptions) {
    let parentNode = nodeMap.get(des[0])
    if (!parentNode) {
      nodeMap.set(des[0], new TreeNode(des[0]))
      parentNode = nodeMap.get(des[0])
    }
    let childNode = nodeMap.get(des[1])
    if (!childNode) {
      nodeMap.set(des[1], new TreeNode(des[1]))
      childNode = nodeMap.get(des[1])
    }
    if (des[2] == 0) {
      parentNode.right = childNode
    } else {
      parentNode.left = childNode
    }
    if (!rootMap.has(des[0])) {
      rootMap.set(des[0], 1)
    }
    rootMap.set(des[1], 0)
  }
  let rootValue = -1
  for (const entry of [...rootMap.entries()]) {
    if (entry[1] == 1) {
      rootValue = entry[0]
      break;
    }
  }
  return nodeMap.get(rootValue)
};