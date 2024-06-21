/**
 * @param {number[]} nums
 * @return {number[][]}
 */

// backtracking
var bt = function (nums) {
  function process(current, nums) {
    if (current == nums.length) {
      return [[]]
    }
    let resPerm = []
    let perm = process(current + 1, nums);
    for (let p of perm) {
      for (let j = 0; j < p.length + 1; j++) {
        let cp = p.slice()
        cp.splice(j, 0, nums[current])
        resPerm.push(cp)
      }
    }
    return resPerm
  }
  return process(0, nums)
}

// iteration
var iteration = function (nums) {
  let resPerm = [[]]
  for (let i = 0; i < nums.length; i++) {
    let perm = []
    for (let p of resPerm) {
      for (let j = 0; j < p.length + 1; j++) {
        let cp = p.slice()
        cp.splice(j, 0, nums[i])
        perm.push(cp)
      }
    }
    resPerm = perm
  }
  return resPerm
}

var permute = function (nums) {
  return iteration(nums)
};