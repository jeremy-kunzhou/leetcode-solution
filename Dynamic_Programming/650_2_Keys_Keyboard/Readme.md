# Intuition

[Leetcode](https://leetcode.com/problems/2-keys-keyboard)

# Approach

```
DP

for each steps:
choose copy + paste or paste

parameters: currLength, copyLength

if currLength == n, return 1
if currLength > n, return max_operation

option op1:
use copy currLength and paste
op1 = 2 + process(currLength * 2, currLength)

option op2:
use paste
op2 = 1 + process(currLength + copyLength, copyLength)

return Min(op1, op2)

```

# Complexity

- Time complexity: O(n ^ 2)

- Space complexity: O(n ^ 2)
