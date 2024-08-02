/**
 * @param {number[]} nums
 * @return {number}
 * TC: O(n)
 * SC: O(1)
 */
var minSwaps = function (nums) {
  let countOne = 0;
  let n = nums.length

  for (let i = 0; i < n; i++) {
    if (nums[i] == 1) countOne++
  }

  let currZero = 0
  // init window with length countOne start from index 0
  for (let i = 0; i < countOne; i++) {
    if (nums[i] == 0) currZero++
  }
  let min = currZero
  let L = 0
  // move window right one by one to update min currZero count
  while (L < n) {
    if (nums[(L + countOne) % n] == 0) currZero++
    if (nums[L] == 0) currZero--
    min = Math.min(currZero, min)
    L++
  }
  return min

};