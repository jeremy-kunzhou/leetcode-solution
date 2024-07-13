# Intuition

[Leetcode](https://leetcode.com/problems/robot-collisions)

Daily Question on July 13, 2024

# Approach

simulation the whole activities

```
sort the robot by position
use stack
loop the robot group
- r = robots[i]
- while(stack[-1].direction == R && r.direction == L && res):
  - simulate the collision
  - if res is not null, continue
  push the res to stack
sort the stack based on robot number
return the arr contain health value
```

# Complexity

- Time complexity: O(nlogn) because of sort

- Space complexity: O(n)
