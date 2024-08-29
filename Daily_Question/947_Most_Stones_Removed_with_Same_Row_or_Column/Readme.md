# Intuition

[Leetcode](https://leetcode.com/problems/most-stones-removed-with-same-row-or-column)

Daily Question on August 29, 2024

# Approach

```
turn matrix to adj because it is sparse matrix
dfs all the nodes
dfs based on adj
count how many dfs need to run
this number is the minimum stones will left
stones.length - count is the answer
```

# Complexity

- Time complexity: O(m X n)

- Space complexity: O(m X n)
