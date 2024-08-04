# Intuition

[Leetcode](https://leetcode.com/problems/range-sum-of-sorted-subarray-sums)

Daily Question on August 4, 2024

# Approach

## BF

follow the instruction and build step by step

## OpV1

```
using minHeap to sort the generated sum of subarray
generate sum of subarray one by one step during the loop from 1 to 'right'
```

# Complexity

- Time complexity: O(n + logn)

- Space complexity: O(n ^ 2)
