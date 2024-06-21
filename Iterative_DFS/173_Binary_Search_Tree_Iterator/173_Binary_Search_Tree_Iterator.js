/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * V3 is better: change the moveToNext function
 * to differnt tranversal type: preorder, postorder, inorder 
 * @param {TreeNode} root
 */
var BSTIterator = function (root) {
  this.root = root;
  this.curr = root;

  // v1- v2 -----
  // this.stack = []
  // this.visited = []
  // this.moveToNextV2()

  // V3 -------------
  this.stack = [root]
  this.visited = [false]
  this.moveToNextV3()
};
/**
* @return {number}
*/
BSTIterator.prototype.next = function () {
  return this.nextV3()
};

/**
* @return {boolean}
*/
BSTIterator.prototype.hasNext = function () {
  return this.curr != null
};

BSTIterator.prototype.moveToNextV3 = function () {
  while (this.stack.length != 0) {
    this.curr = this.stack.pop();
    const isVisited = this.visited.pop();
    if (this.curr) {
      if (isVisited) {
        break;
      } else {
        // inorder
        this.stack.push(this.curr.right)
        this.visited.push(false)
        this.stack.push(this.curr)
        this.visited.push(true)
        this.stack.push(this.curr.left)
        this.visited.push(false)
        // preorder
        // this.stack.push(this.curr.right)
        // this.visited.push(false)
        // this.stack.push(this.curr.left)
        // this.visited.push(false)
        // this.stack.push(this.curr)
        // this.visited.push(true)
        //postorder
        // this.stack.push(this.curr)
        // this.visited.push(true)
        // this.stack.push(this.curr.right)
        // this.visited.push(false)
        // this.stack.push(this.curr.left)
        // this.visited.push(false)
      }
    }

  }
}

BSTIterator.prototype.nextV3 = function () {
  let res = this.curr.val;
  this.moveToNextV3()
  return res

};


BSTIterator.prototype.moveToNextV2 = function () {
  while (this.curr !== null || this.stack.length != 0) {
    if (this.curr != null) {
      this.stack.push(this.curr);
      this.curr = this.curr.left;
    } else {
      this.curr = this.stack.pop();
      break;
    }
  }
}

BSTIterator.prototype.nextV2 = function () {
  let res = this.curr.val;
  this.curr = this.curr.right
  this.moveToNextV2()
  return res
};


BSTIterator.prototype.moveToNextV1 = function () {
  while (this.curr !== null) {
    if (this.curr.right) {
      this.stack.push(this.curr.right)
      this.visited.push(false)
    }
    this.stack.push(this.curr)
    this.visited.push(true)
    if (this.curr.left) {
      this.curr = this.curr.left
      continue
    }
    break;
  }
}

BSTIterator.prototype.nextV1 = function () {
  let res = this.curr.val;
  this.stack.pop();
  this.visited.pop();

  let isVisited = this.visited[this.stack.length - 1]
  if (isVisited == false) {
    this.curr = this.stack.pop()
    this.visited.pop()
    this.moveToNextV1()
  }

  this.curr = this.stack[this.stack.length - 1]
  return res
};



/** 
* Your BSTIterator object will be instantiated and called as such:
* var obj = new BSTIterator(root)
* var param_1 = obj.next()
* var param_2 = obj.hasNext()
*/