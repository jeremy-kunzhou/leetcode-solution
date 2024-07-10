# Intuition

[Leetcode](https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/)

In the requirement, the TC is O(logn). So the algorithm need to use is binary search.

After several times of rotation, the smallest value could be in the left part of Mid or in the right part of the Mid.

If the L el larger than Mid el, the smallest value will be in the left part.
If the L el smaller than Mid el, the smallest value will be in the right part.

# Approach

```
if nums[0] < nums[-1], return nums[0]

L = 0, R = len(nums) - 1
while(L < R) {
  if only two left: return the smaller one.
  M = ( L + R ) // 2
  if(nums[L] > nums[M]) R = M  search left part
  else L = M search right part
}

return nums[0]

```

# Complexity

- Time complexity: O(logn)

- Space complexity: O(1)
