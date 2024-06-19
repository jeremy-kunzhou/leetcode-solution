/**
 * @param {number[]} nums
 * @return {boolean}
 */
var bf = function (nums, total) {
  function process(l, r) {
    if (r - l == 0) return nums[l]
    if (l > r) return 0
    // choose l
    // get the minimum of the next possible selection because the player2 play optimally
    let temp1 = nums[l] + Math.min(process(l + 1, r - 1), process(l + 2, r))

    // choose r
    // get the minimum of the next possible selection because the player2 play optimally
    let temp2 = nums[r] + Math.min(process(l + 1, r - 1), process(l, r - 2))
    return Math.max(temp1, temp2)
  }
  let max = process(0, nums.length - 1)
  return total - max <= max
}

// Runtime: 50ms
// Memory: 51.3MB
// Time Complexity: O(N^2)
// Space Complexity: O(N^2)
var dp = function (nums, total) {
  let cache = Array(nums.length).fill(0).map(e => Array(nums.length).fill(0))

  for (let l = nums.length - 1; l >= 0; l--) {
    for (let r = 0; r < nums.length; r++) {
      if (r - l == 0) {
        cache[l][r] = nums[l]; continue;
      }

      if (l > r) {
        cache[l][r] = 0; continue;
      }

      // choose l
      // get the minimum of the next possible selection because the player2 play optimally
      let temp1 = nums[l] + Math.min(
        (l + 1 < nums.length && r - l >= 0) ? cache[l + 1][r - 1] : 0,
        (l + 2 < nums.length) ? cache[l + 2][r] : 0
      )

      // choose r
      // get the minimum of the next possible selection because the player2 play optimally
      let temp2 = nums[r] + Math.min(
        (l + 1 < nums.length && r - l >= 0) ? cache[l + 1][r - 1] : 0,
        (r - 2 >= 0) ? cache[l][r - 2] : 0
      )
      cache[l][r] = Math.max(temp1, temp2)
    }
  }
  // console.log(cache)
  let max = cache[0][nums.length - 1]
  return total - max <= max
}
var predictTheWinner = function (nums) {
  let total = nums.reduce((acc, e) => acc + e, 0)
  return dp(nums, total)
};