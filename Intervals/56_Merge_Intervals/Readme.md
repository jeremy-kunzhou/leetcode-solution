# Intuition

[Leetcode](https://leetcode.com/problems/merge-intervals/)

# Approach

```
sort intervals based on start time
loop the intervals
- compare the end time of temp with the start time of current interval
  - if start time is larger than end time, there will be no overlap
    - push the temp to the res array
    - make the current interval as temp for comparing
  - else
    - merge temp with the current interval for the next comparing operation
```

# Complexity

- Time complexity: O(n X log(n))

- Space complexity: O(1)
