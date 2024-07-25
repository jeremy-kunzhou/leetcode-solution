# Intuition

[Leetcode](https://leetcode.com/problems/non-overlapping-intervals/)

# Approach

```
sort the intervals by start time
set preEnd to the end time of first of intervals
loop the rest of the intervals
- if start is larger than or equal to preEnd, set preEnd to the end of interval
- else
  - update res ++
  - the larger value of preEnd and end will not considered (deleted). so update the preEnd to the smaller value of preEnd and end
```

# Complexity

- Time complexity: O(n X log(n))

- Space complexity: O(1)
