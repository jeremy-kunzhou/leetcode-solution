# Intuition

[Leetcode](https://leetcode.com/problems/spiral-matrix-iii)

Daily Question on August 8, 2024

# Approach

```
simulation

pattern:
rS, cS, length, firstDirection = right
rS, cS -> rS, cS + length -1
rS, cS + length -1 -> rS + length -1, cS + length -1

firstDirection = left
rS, cS -> rS, cS - length + 1
rS, cS - length + 1 -> rS - length + 1, cS - length + 1

follow the pattern
from the start cell, length start from 2,
length increase 1 after finish the pattern once.
until the length of res equals to rows * cols

```

# Complexity

- Time complexity: O(n)

- Space complexity: O(n)
