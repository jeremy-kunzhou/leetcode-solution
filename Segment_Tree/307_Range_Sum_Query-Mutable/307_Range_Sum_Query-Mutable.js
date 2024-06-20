/**
 * @param {number[]} nums
 */

var NumArray = function (nums, L = 0, R = nums.length - 1) {
  this.sum = 0
  this.left = null
  this.right = null
  this.L = L
  this.R = R

  if (L == R) {
    this.sum = nums[L]
  } else {
    const M = (R + L) / 2 >>> 0
    this.left = new NumArray(nums, L, M)
    this.right = new NumArray(nums, M + 1, R)
    this.sum = this.left.sum + this.right.sum
  }

};

/** 
* @param {number} index 
* @param {number} val
* @return {void}
*/
NumArray.prototype.update = function (index, val) {
  if (this.L == this.R) {
    this.sum = val
  } else {
    const M = (this.R + this.L) / 2 >>> 0;
    if (index <= M) {
      this.left.update(index, val)
    } else {
      this.right.update(index, val)
    }
    this.sum = this.left.sum + this.right.sum
  }
};

/** 
* @param {number} left 
* @param {number} right
* @return {number}
*/
NumArray.prototype.sumRange = function (left, right) {
  if (this.L == left && this.R == right) {
    return this.sum
  } else {
    const M = (this.R + this.L) / 2 >>> 0
    if (M < left) {
      return this.right.sumRange(left, right)
    } else if (M >= right) {
      return this.left.sumRange(left, right)
    } else {
      return this.left.sumRange(left, M) + this.right.sumRange(M + 1, right)
    }
  }
};

/** 
* Your NumArray object will be instantiated and called as such:
* var obj = new NumArray(nums)
* obj.update(index,val)
* var param_2 = obj.sumRange(left,right)
*/