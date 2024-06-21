/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function (nums) {
  const res = new Map()
  function process(current, subset) {
    if (current >= nums.length) {
      const key = subset.sort((a, b) => a - b).join(',')
      res.set(key, [...subset])
      return
    }
    process(current + 1, [...subset])
    subset.push(nums[current])
    process(current + 1, [...subset])

  }
  process(0, [])

  return [...res.values()]
};