
class SegmentTree {

  // val is max value of all the subtree
  constructor(val, L, R) {
    this.val = val;
    this.left = null;
    this.right = null;
    this.L = L;
    this.R = R;
    this.tag = false
  }

  // O(n)
  static buildWithArray(L, R, nums) {
    if (L == R) {
      return new SegmentTree(nums[L], L, R);
    }

    let M = Math.floor((L + R) / 2);
    let root = new SegmentTree(0, L, R);
    root.left = SegmentTree.buildWithArray(L, M, nums);
    root.right = SegmentTree.buildWithArray(M + 1, R, nums);
    root.val = Math.max(root.left.val, root.right.val);
    return root;
  }

  static buildWithValue(L, R, num) {
    if (L == R) {
      return new SegmentTree(num, L, R);
    }

    let M = Math.floor((L + R) / 2);
    let root = new SegmentTree(0, L, R);
    root.left = SegmentTree.buildWithValue(L, M, num);
    root.right = SegmentTree.buildWithValue(M + 1, R, num);
    root.val = Math.max(root.left.val, root.right.val);
    return root;
  }

  pushDown() {
    if (this.tag && this.left) {
      this.left.val = this.val;
      this.right.val = this.val;
      this.left.tag = true;
      this.right.tag = true;
      this.tag = false
    }
  }

  // O(logn)
  update(a, b, val) {
    if (b < this.L || a > this.R) return
    if (a <= this.L && this.R <= b) {
      this.val = val;
      this.tag = true
      return;
    }
    if (this.left) {
      this.pushDown()
      let M = Math.floor((this.L + this.R) / 2);
      this.left.update(a, b, val)
      this.right.update(a, b, val)
      this.val = Math.max(this.left.val, this.right.val);
    }


  }

  // O(logn)
  rangeQuery(a, b) {
    if (b < this.L || a > this.R) {
      return -Number.MAX_SAFE_INTEGER / 2
    }
    if (a <= this.L && this.R <= b) {
      return this.val
    }
    if (this.left) {
      this.pushDown()
      let res = Math.max(this.left.rangeQuery(a, b), this.right.rangeQuery(a, b));
      this.val = Math.max(this.left.val, this.right.val)
      return res
    }

    return null
  }
}