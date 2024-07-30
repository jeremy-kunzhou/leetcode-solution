/**
 * @param {string} s
 * @return {number}
 * TC: O(n)
 * SC: O(n)
 */
var minimumDeletions = function (s) {
  // init current counter
  let countAfterA = 0, countBeforeB = 0
  // init memo
  let deletionCount = Array(s.length).fill(0)
  for (let i = 0; i < s.length; i++) {
    deletionCount[i] += countAfterA
    deletionCount[s.length - 1 - i] += countBeforeB
    if (s[i] == 'b')
      countBeforeB++
    if (s[s.length - 1 - i] == 'a')
      countAfterA++
  }
  // found the min value from deletionCount
  return Math.min(...deletionCount)
};