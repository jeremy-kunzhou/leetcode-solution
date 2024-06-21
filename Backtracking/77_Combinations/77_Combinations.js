/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */

// backtracking
var bt = function (n, k) {
  function process(current, currSet, resSet) {
    if (currSet.length == k) {
      resSet.push([...currSet])
      return
    }
    if (current > n) return

    currSet.push(current)
    process(current + 1, currSet, resSet)
    currSet.pop()

    process(current + 1, currSet, resSet)
  }
  const resSet = []
  process(1, [], resSet)
  return resSet
}

var combine = function (n, k) {
  return bt(n, k)
};