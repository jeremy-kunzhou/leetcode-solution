# Intuition

[Leetcode](https://leetcode.com/problems/average-waiting-time/)

Daily Question at 09 July 2024
simulate the whole events

# Approach

```
currTime: chef is free at
waitingSum: sum of waiting time of customers

loop the customers array:
- fast forward the currTime to the next customer arrived
- waitingTime = currTime + timePrepare - timeCustomerArrived
- update waitingSum
- currTime = currTime + timePrepare

return the average waiting time
```

# Complexity

- Time complexity: O(n)

- Space complexity: O(1)
