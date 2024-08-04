# Intuition

[Leetcode](https://leetcode.com/problems/shortest-distance-after-road-addition-queries-i)

# Approach

```
build adjacent list for each node
update map based on queries
run dijkstra for each updates to find the shortest path
```

# Complexity

- Time complexity: O(n + e)
- Space complexity: O(n + e)
