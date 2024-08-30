# Intuition

[Leetcode](https://leetcode.com/problems/modify-graph-edge-weights/)

Daily Question on August 30, 2024

# Approach

```
use dijkstra to get the shortest path from source to target
1 use adj to build graph without -1 edge
2 if the shortest is less than target, means no way to meet the target by add more edges with -1. return empty array
3 if the shortest path weight is already the target, set the rest -1 edge to any value in range of [1, 2 * 10 ** 9]
4 loop all the edge and turn -1 edge to 1 weight edge one by one and using dijkstra to check the shortest path is found. When found the shortest path, set the weight of current edge to the gap between target and shortest path weight + 1
It doesn't matter if the count of edge is the smallest as long as the shortest path weight is the target.
5 if shortest path weight equals to target, return the edges. otherwise, return empty list

```

# Complexity

- Time complexity: O(E X (E + ElogV))

- Space complexity: O(E + V)
