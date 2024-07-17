# Intuition

[Leetcode](https://leetcode.com/problems/delete-nodes-and-return-forest)

Daily Question on July 17, 2024

# Approach

```
dfs to get nodeMap and nodeParent
dfs in post-order-traversal to remove relationship and parental-ship
- if node val not in to_delete and parent of node is null, add node to res set
return res set in array
```

# Complexity

- Time complexity: O(n)

- Space complexity: O(n)
