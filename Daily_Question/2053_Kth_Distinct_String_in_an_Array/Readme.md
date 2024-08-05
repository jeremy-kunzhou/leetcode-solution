# Intuition

[Leetcode](https://leetcode.com/problems/kth-distinct-string-in-an-array)

Daily Question on August 5th, 2024

# Approach

```
hashmap to count the frequency times of the element [O(n)]
loop the arr, if map[arr[i]] == 1, mark it, until mark the kth one [O(n)]
```

# Complexity

- Time complexity: O(n)

- Space complexity: O(n)
