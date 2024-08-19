# Intuition

[Leetcode](https://leetcode.com/problems/ugly-number-ii)

# Approach

```
minHeap + hashset
put 1 in minHeap
while(minHeap.size > 0) {
  let minVal = minHeap.dequeue()
  popCount ++;
  if(popCount == n) return minVal
  newVals = [minVal * 2, minVal * 3, minVal * 5]
  if(newVals[i] not in set) {
    minHeap.enqueue(newVals[i])
    add newVals[i] to set
  }
}

TC: O(n * logn)
SC: O(n)

```

# Complexity

- Time complexity: O(n X logn)
- Space complexity: O(n)
