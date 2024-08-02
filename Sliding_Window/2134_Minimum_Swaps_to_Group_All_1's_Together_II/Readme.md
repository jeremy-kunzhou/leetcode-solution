# Intuition

[Leetcode](https://leetcode.com/problems/minimum-swaps-to-group-all-1s-together-ii)

Daily Question on August 2nd, 2024

# Approach

```
in the result all the 1 should be together.
Count 1 from the given array, marked as countOne.
the min replace should all happen for the zeros in the window length is countOne
using fixed sliding window, start scanning from 0 index, update the count of zero in the window.
return the min count of zero while sliding
```

# Complexity

- Time complexity: O(n)

- Space complexity: O(1)
