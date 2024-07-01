/**
 * @param {number[]} nums
 * @return {number[]}
 * Intuition:
 * Two Pointers
 * pointers from head and tail
 * choose the larger one and fill the powered value to the tail of result
 * if choose L value, move forward; if choose R value, move backward
 * 
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 */
var sortedSquares = function (nums) {
  let res = Array(nums.length).fill(0)
  let L = 0;
  let R = nums.length - 1;
  let idx = nums.length - 1;
  while (L <= R) {
    if (Math.abs(nums[L]) > Math.abs(nums[R])) {
      res[idx] = nums[L] ** 2;
      L++;
    } else {
      res[idx] = nums[R] ** 2;
      R--;
    }
    idx--;
  }
  return res;
};