# Intuition

[Leetcode](https://leetcode.com/problems/step-by-step-directions-from-a-binary-tree-node-to-another)

Daily Question on July 16, 2024

# Approach

```
 there must be same parent node shared by the s or d (the parent could be s or d itself)
 based on s or d in which child, trace down to the child. if s, reverse to U
```

# Complexity

- Time complexity: O(n+h)

- Space complexity: O(n+h)
