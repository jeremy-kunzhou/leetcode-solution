# Intuition

[Leetcode](https://leetcode.com/problems/lucky-numbers-in-a-matrix)

Daily Question on July 19, 2024

# Approach

```
loop the matrix to get the minOfRows and the maxOfColumn
check if any common element in those array
- if has, this element is the lucky number
- otherwise, there is no lucky number of the given matrix
```

# Complexity

- Time complexity: O(m \* n)

- Space complexity: O(max(m, n))
