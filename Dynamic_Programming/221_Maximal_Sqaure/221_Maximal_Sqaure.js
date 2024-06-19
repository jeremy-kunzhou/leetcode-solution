/**
 * @param {character[][]} matrix
 * @return {number}
 */

var bf = function (matrix) {
  let m = matrix.length;
  let n = matrix[0].length;
  let max = 0;

  function process(c, r) {
    if (c >= n) return 0;
    if (r >= m) return 0;

    let pre = Math.min(process(c + 1, r), process(c + 1, r + 1), process(c, r + 1))
    let temp = matrix[r][c] != '1' ? 0 : (1 + pre)
    max = Math.max(max, temp)
    return temp
  }

  process(0, 0)
  return Math.pow(max, 2)
}
var dp = function (matrix) {
  let m = matrix.length;
  let n = matrix[0].length;
  let cache = Array(m).fill(0).map(e => Array(n).fill(0))
  let max = 0;

  function getValue(c, r) {
    if (c >= n) return 0;
    if (r >= m) return 0;
    return cache[r][c]
  }

  for (let r = m - 1; r >= 0; r--) {
    for (let c = n - 1; c >= 0; c--) {
      cache[r][c] = matrix[r][c] != '1' ? 0 : (1 + Math.min(getValue(c + 1, r), getValue(c + 1, r + 1), getValue(c, r + 1)))
      max = Math.max(max, cache[r][c])
    }
  }
  return Math.pow(max, 2)
}
var maximalSquare = function (matrix) {
  return dp(matrix)
};