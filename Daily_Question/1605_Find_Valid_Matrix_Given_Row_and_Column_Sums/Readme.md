# Intuition

[Leetcode](https://leetcode.com/problems/find-valid-matrix-given-row-and-column-sums)

Daily Question on July 20, 2024

# Approach

## Old

not the best solution

```
find the min in rowSum and colSum
fill the min to the first -1 in given direction from the left or top
update given rowSum and colSum to subtract the min in relevant sum
repeat the process until all the matrix filled

```

## Optimize

best solution

# Complexity

## Old

- Time complexity: O((m+n) ^ 2)
- Space complexity: O(m X n)

## Optimize

- Time complexity: O(m X n)
- Space complexity: O(m X n)
