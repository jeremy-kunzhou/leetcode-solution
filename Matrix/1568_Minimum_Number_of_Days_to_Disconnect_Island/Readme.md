# Intuition

[Leetcode](https://leetcode.com/problems/minimum-number-of-days-to-disconnect-island)

Daily Question on August 11, 2024

# Approach

```
run dfs to find the count of islands
if more than 1 or zero, return 0
if one then:
try to remove any of the land in the islands and run dfs again to check the count of islands
if count more then one, return 1
else return 2
TC: O(m X n X m X n)
SC: O(m X n)
```

# Complexity

- Time complexity: O((m X n) ^ 2)
- Space complexity: O(m X n)
