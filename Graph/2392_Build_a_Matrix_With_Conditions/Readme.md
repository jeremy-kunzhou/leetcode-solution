# Intuition

[Leetcode](https://leetcode.com/problems/build-a-matrix-with-conditions)

Daily Question on July 21, 2024

# Approach

```
use topologySort to get the sort order in vertical and horizontal direction
build position map based on the order for each val
build the final matrix based on the position map
```

# Complexity

- Time complexity: O(k)

- Space complexity: O(k ^ 2)
