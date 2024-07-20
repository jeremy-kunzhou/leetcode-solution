# Intuition

[Leetcode](https://leetcode.com/problems/reconstruct-a-2-row-binary-matrix)

# Approach

```
0 build matrix
1 fill the two cell in column which colsum is 2
2 fill the rest by min which min(rowSum[j], colsum[i]) if larger than 1, use 1
  - update rowSum and colsum
3 if any of rowSum or colsum has element not zero, return []
4 return the matrix

```

# Complexity

- Time complexity: O(n)

- Space complexity: O(n)
