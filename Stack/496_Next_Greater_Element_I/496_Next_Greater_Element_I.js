/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function (nums1, nums2) {
  let map = new Map()
  // O(num1.length)
  for (let i = 0; i < nums1.length; i++) {
    map.set(nums1[i], i)
  }
  let stack = []
  let res = Array(nums1.length).fill(-1)
  // O(num2.length)
  for (let i = 0; i < nums2.length; i++) {
    let num = nums2[i]
    while (stack.length > 0 && nums2[stack[stack.length - 1]] < num) {
      let idx = stack.pop()
      if (map.has(nums2[idx])) res[map.get(nums2[idx])] = num
    }
    stack.push(i)
  }
  return res

};