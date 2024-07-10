/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function (nums) {
  let L = 0
  let R = nums.length - 1
  if (nums[0] < nums[nums.length - 1]) return nums[0]
  while (L < R) {
    if (L + 1 == R) {
      return Math.min(nums[L], nums[R])
    }
    const M = (L + R) / 2 >> 0
    if (nums[L] > nums[M]) {
      R = M
    } else {
      L = M
    }
  }
  return nums[0]
};