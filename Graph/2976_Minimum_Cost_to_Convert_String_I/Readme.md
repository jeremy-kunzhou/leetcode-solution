# Intuition

[Leetcode](https://leetcode.com/problems/minimum-cost-to-convert-string-i/)

Daily Question on July 27, 2024

# Approach

```
floyd-washall to get the shortest path for nodes between each other
loop from the index 0 using two pointer for source and target
if no path, return -1
else cost += the weight of the path from original to changed
```

# Complexity

- Time complexity: O(26\*26 + source.length + original.length)

- Space complexity: O(1)
