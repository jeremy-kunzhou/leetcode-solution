# Intuition

[Leetcode](https://leetcode.com/problems/regions-cut-by-slashes/)

Daily Question on August 10, 2024

# Approach

```
 * UnionFind
 * the ceil has four nodes: top, right, bottom, left.
 * each node is connected with this relationship:
 * when ' '
 *    - top - right; top - left
 *    - bottom - right; bottom - left
 * when '/'
 *    - top - left;
 *    - bottom - right;
 * when '\'
 *    - top - right;
 *    - bottom - left;
 * they all connected with neighbors nodes via the adjacent edge
 *
 *              bottom
 *               ----
 *               top
 *
 * right | left       right | left
 *
 *              bottom
 *               ----
 *               top
 *
```

# Complexity

- Time complexity: O(n X n)
- Space complexity: O(n X n)
