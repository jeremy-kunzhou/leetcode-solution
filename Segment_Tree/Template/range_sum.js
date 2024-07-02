
class SegmentTreeNode {

  // val is max value of all the subtree
  constructor(val, L, R) {
    this.val = val;
    this.left = null;
    this.right = null;
    this.L = L;
    this.R = R;
    this.lazyTag = false
    this.lazyVal = 0
  }

  // O(n)
  static buildWithArray(L, R, nums) {
    if (L == R) {
      return new SegmentTreeNode(nums[L], L, R);
    }

    let M = Math.floor((L + R) / 2);
    let root = new SegmentTreeNode(0, L, R);
    root.left = SegmentTreeNode.buildWithArray(L, M, nums);
    root.right = SegmentTreeNode.buildWithArray(M + 1, R, nums);
    root.val = root.left.val + root.right.val;
    return root;
  }

  static buildWithValue(L, R, num) {
    if (L == R) {
      return new SegmentTreeNode(num, L, R);
    }

    let M = Math.floor((L + R) / 2);
    let root = new SegmentTreeNode(0, L, R);
    root.left = SegmentTreeNode.buildWithValue(L, M, num);
    root.right = SegmentTreeNode.buildWithValue(M + 1, R, num);
    root.val = root.left.val + root.right.val;
    return root;
  }

  pushDown() {
    if (this.lazyTag && this.left) {
      this.left.val = this.lazyVal * (this.left.R - this.left.L + 1);
      this.right.val = this.lazyVal * (this.right.R - this.right.L + 1);
      this.left.lazyTag = true; this.left.lazyVal = this.lazyVal
      this.right.lazyTag = true; this.right.lazyVal = this.lazyVal
      this.lazyTag = false
      this.lazyVal = 0
    }
  }

  // O(logn)
  update(a, b, val) {
    if (b < this.L || a > this.R) return
    if (a <= this.L && this.R <= b) {
      this.val = val * (this.R - this.L + 1);
      this.lazyTag = true;
      this.lazyVal = val;
      return;
    }
    if (this.left) {
      this.pushDown()
      this.left.update(a, b, val)
      this.right.update(a, b, val)
      this.val = this.left.val + this.right.val;
    }


  }

  // O(logn)
  rangeQuery(a, b) {
    if (b < this.L || a > this.R) {
      return 0
    }
    if (a <= this.L && this.R <= b) {
      return this.val
    }
    if (this.left) {
      this.pushDown()
      let res = this.left.rangeQuery(a, b) + this.right.rangeQuery(a, b);
      this.val = this.left.val + this.right.val
      return res
    }

    return null
  }
}