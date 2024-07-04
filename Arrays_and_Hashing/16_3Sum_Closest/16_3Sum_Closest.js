/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

var bf = function (nums, target) {
  let res = nums[0] + nums[1] + nums[2]
  function process(curr, currSum, count) {
    if (count == 3) {
      if (Math.abs(res - target) > Math.abs(currSum - target)) {
        res = currSum
      }
      return
    }
    if (curr == nums.length) return
    // not choose
    process(curr + 1, currSum, count)
    // choose
    process(curr + 1, currSum + nums[curr], count + 1)
  }
  process(0, 0, 0)
  return res
}

// two flex pointer and one fixed pointer
var tp = function (nums, target) {
  nums.sort((a, b) => a - b)
  let res = nums[0] + nums[1] + nums[2]
  for (let i = 0; i < nums.length - 2; i++) {
    let j = i + 1;
    let k = nums.length - 1;

    while (j < k) {
      const sum = nums[i] + nums[j] + nums[k]
      if (Math.abs(sum - target) < Math.abs(res - target)) {
        res = sum
      }
      if (sum > target) {
        k--
      } else {
        j++
      }
    }
  }
  return res
}



var threeSumClosest = function (nums, target) {
  return tp(nums, target)
};