# Intuition

[Leetcode](https://leetcode.com/problems/number-of-good-leaf-nodes-pairs)

Daily Question on July 18, 2024

# Approach

```
turn tree to adj map
get leaves
run dfs on each leaf until reach other leaf node or exceed the distance
```

# Complexity

- Time complexity: O(n \* e)

- Space complexity: O(n)
