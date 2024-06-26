/**
 * @param {number[]} nums
 * @return {number[]}
 */
var nextGreaterElements = function (nums) {
  let stack = []
  let res = Array(nums.length).fill(-1)

  for (let i = 0; i < nums.length * 2; i++) {
    let num = nums[i % nums.length]
    while (stack.length > 0 && nums[stack.at(-1) % nums.length] < num) {
      let idx = stack.pop();
      res[idx % nums.length] = num
    }
    stack.push(i)
  }
  return res
};