/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */

// TLE
var bf = function (nums, k) {
  function process(curr, pre, sub) {
    if (curr == nums.length) {
      return 0
    }
    // not choose
    let max = process(curr + 1, pre, sub)

    // choose
    if (pre == -1) {
      max = Math.max(max, 1 + process(curr + 1, curr, [...sub, nums[curr]]))
    }
    else if (nums[curr] - nums[pre] <= k && nums[curr] - nums[pre] > 0) {
      max = Math.max(max, 1 + process(curr + 1, curr, [...sub, nums[curr]]))
    }
    return max
  }

  return process(0, -1, [])
}

// TLE
var bfC = function (nums, k) {
  const cache = new Map()
  function process(curr, pre, sub, cache) {
    const key = `${curr}_${pre}`
    if (curr == nums.length) {
      return 0
    }
    if (cache.has(key)) return cache.get(key)
    // not choose
    let max = process(curr + 1, pre, sub, cache)

    // choose
    if (pre == -1) {
      max = Math.max(max, 1 + process(curr + 1, curr, [...sub, nums[curr]], cache))
    }
    else if (nums[curr] - nums[pre] <= k && nums[curr] - nums[pre] > 0) {
      max = Math.max(max, 1 + process(curr + 1, curr, [...sub, nums[curr]], cache))
    }
    cache.set(key, max)
    return cache.get(key)
  }
  return process(0, -1, [], cache)
}

// TLE
var dp = function (nums, k) {
  let curr = Array(nums.length + 2).fill(0)
  let next = Array(nums.length + 2).fill(0)
  for (let current = nums.length; current >= 0; current--) {
    curr = Array(nums.length + 2).fill(0)
    for (let pre = nums.length; pre >= 0; pre--) {
      if (current == nums.length) {
        curr[pre] = 0;
        continue
      }
      let max = next[pre]

      if (pre - 1 == -1) {
        max = Math.max(max, 1 + next[current + 1])
      } else if (nums[current] - nums[pre - 1] <= k && nums[current] - nums[pre - 1] > 0) {
        max = Math.max(max, 1 + next[current + 1])
      }
      curr[pre] = max
    }
    next = curr
  }
  return curr[0]
}



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
      return null
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

var sg = function (nums, k) {
  const segTree = SegmentTree.buildWithValue(0, 100005, 0)
  let max = -Number.MAX_SAFE_INTEGER
  for (const num of nums) {
    let len = segTree.rangeQuery(Math.max(0, num - k), num - 1)
    segTree.update(num, num, len + 1)
    max = Math.max(max, len + 1)
  }
  return max
}

var lengthOfLIS = function (nums, k) {
  return sg(nums, k)
};