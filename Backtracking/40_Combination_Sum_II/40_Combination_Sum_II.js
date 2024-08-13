/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 * intuition
 * backtrack
 * use [sort] and [prev check] to avoid duplicate
 */

var combinationSum2 = function (candidates, target) {
  const res = [];
  const currCombination = [];
  // **** TO avoid duplicate number
  candidates.sort((a, b) => a - b)

  function helper(currIdx, remain) {
    if (remain === 0) {
      res.push([...currCombination]);
      return;
    }
    if (currIdx === candidates.length) return;

    // **** TO avoid duplicate number
    let prev = -1
    for (let i = currIdx; i < candidates.length; i++) {
      // **** TO avoid duplicate number
      if (prev == candidates[i]) continue

      // *** backtracking
      if (candidates[i] <= remain) {
        currCombination.push(candidates[i])
        helper(i + 1, remain - candidates[i])
        currCombination.pop()
      } else {
        break;
      }

      // **** TO avoid duplicate number
      prev = candidates[i]
    }
    return;
  }

  helper(0, target)

  return res
};