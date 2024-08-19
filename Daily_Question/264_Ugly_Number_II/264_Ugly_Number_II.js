/**
 * @param {number} n
 * @return {number}
 * minHeap + hashset
 * put 1 in minHeap
 * while(minHeap.size > 0) {
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
 */
var nthUglyNumber = function (n) {
  const minHeap = new MinPriorityQueue();
  minHeap.enqueue(1)
  const set = new Set([1])
  let popCount = 0
  while (minHeap.size() > 0) { // O(n)
    const minVal = minHeap.dequeue().element  // O(logn)
    if (++popCount == n) return minVal;
    for (let i = 0; i < 3; i++) {
      const newVal = minVal * [2, 3, 5][i]
      if (!set.has(newVal)) {
        set.add(newVal)
        minHeap.enqueue(newVal) // O(logn)
      }
    }
  }
  return -1
};