/**
 * @param {string} digits
 * @return {string[]}
 */
const list = {
  2: "abc",
  3: "def",
  4: "ghi",
  5: "jkl",
  6: "mno",
  7: "pqrs",
  8: "tuv",
  9: "wxyz"
}

var bt = function (digits) {
  function process(current, currSet, resSet) {
    if (current >= digits.length) {
      resSet.push(currSet.join(''))
      return
    }
    const candidates = list[digits[current]];
    for (let i = 0; i < candidates.length; i++) {
      currSet.push(candidates[i])
      process(current + 1, currSet, resSet)
      currSet.pop()
    }
  }
  const resSet = []
  process(0, [], resSet)
  return resSet
}

var letterCombinations = function (digits) {
  if (digits.length == 0) return []
  return bt(digits)
};