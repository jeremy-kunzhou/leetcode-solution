# Intuition

[Leetcode](https://leetcode.com/problems/number-of-atoms/)
Daily Question at July 14, 2024

# Approach

```
 * 1 pre-process: map: the parenthesis left idx as key, with value including right parenthesis idx, multiple, next i idx
 * process function(start, end, multiple):
 * loop the string with stack to record
 * - if UpperCase letter or the end of string:
 *   - keep stack.pop() until stack empty to get name and the count, then update hashmap with multiple
 * - if lowerCase letter: to stack
 * - if number: to stack
 * - if left parenthesis:
 *   - process(start, end, map.get(leftIdx).multiple * multiple),
 *   - set the i to the map.get(leftIdx).next

```

# Complexity

- Time complexity: O(nlogn)

- Space complexity: O(n)
