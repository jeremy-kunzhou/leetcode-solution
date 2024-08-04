/**
 * @param {number[]} nums
 * @param {number} n
 * @param {number} left
 * @param {number} right
 * @return {number}
 */

var bf = function (nums, n, left, right) {
  const genArr = [];
  // O(n ^ 2)
  for (let i = 0; i < n; i++) {
    let currSum = 0
    for (let j = i; j < n; j++) {
      currSum += nums[j]
      genArr.push(currSum)
    }
  }
  const arrSort = genArr.sort((a, b) => a - b)
  return arrSort.slice(left - 1, right).reduce((acc, e) => (acc + e)) % (10 ** 9 + 7)
}

var op = function (nums, n, left, right) {
  const minHeap = new MinPriorityQueue({ priority: a => a[0] });
  for (let i = 0; i < n; i++) {
    let currSum = 0
    for (let j = i; j < n; j++) {
      currSum += nums[j]
      minHeap.enqueue([currSum, j])
    }
  }

  let res = 0
  for (let times = 1; times <= right; times++) {
    const [sum, idx] = minHeap.dequeue().element
    if (times < left) continue
    res = (res + sum) % (10 ** 9 + 7)
  }
  return res
}

// key: don't need to generate the sum of all the subarray
var opV1 = function (nums, n, left, right) {
  const minHeap = new MinPriorityQueue({ priority: a => a[0] });
  for (let i = 0; i < n; i++) {
    minHeap.enqueue([nums[i], i])
  }

  let res = 0
  for (let times = 1; times <= right; times++) {
    const [sum, idx] = minHeap.dequeue().element
    // generate the next one step sum start with idx
    if (idx < n - 1) minHeap.enqueue([sum + nums[idx + 1], idx + 1])
    // calculate the res if times equals to or larger than left
    // left means we have to discard the first left-1 element in the queue
    if (times >= left) res = (res + sum) % (10 ** 9 + 7)
  }
  return res
}

var rangeSum = function (nums, n, left, right) {
  return opV1(...Array.from(arguments))
};