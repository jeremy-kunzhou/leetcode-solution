# Intuition

[Leetcode](https://leetcode.com/problems/count-sub-islands)

Daily Question on August 28, 2024

# Approach

```
 * dfs grid2 from 0,0
 * visitlist
 * dfs(r, c)
 * r,c in visit list
 * if given r,c is 1 in both grid2 and grid1
 *    continue mark curr num
 * if given r,c is 1 in grid2 but 0 in grid1
 *    the current island is not subisland
      put num to no island list
      continue mark curr num
 * if given r,c is 0 in grid2
 *    return
 * TC: O(M X N)
 * SC: O(M X N)
```

# Complexity

- Time complexity: O(M X N)

- Space complexity: O(M X N)
