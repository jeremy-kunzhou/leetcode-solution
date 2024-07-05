/**
 * @param {number[]} nums
 * @return {number}
 * Intuition:
 * Hashmap for freq
 * record the maximum of freqency with count at the same time
 * return result
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 */
var maxFrequencyElements = function (nums) {
  const freq = new Map()
  let max = 1;
  let count = 0
  for (let num of nums) {
    if (!freq.has(num)) freq.set(num, 0)
    freq.set(num, freq.get(num) + 1)
    // if the same max, count ++
    // if not, count = 1; record the new max
    if (max == freq.get(num)) {
      count++;
    } else if (max < freq.get(num)) {
      count = 1;
      max = freq.get(num)
    }
  }
  return count * max
};