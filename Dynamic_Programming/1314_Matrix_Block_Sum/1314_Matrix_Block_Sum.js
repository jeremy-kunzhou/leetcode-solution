/**
 * @param {number[][]} mat
 * @param {number} k
 * @return {number[][]}
 */
var matrixBlockSum = function (mat, k) {
  let m = mat.length; // => r
  let n = mat[0].length; // => c
  let preSum = Array(mat.length).fill(0).map(e => Array(mat[0].length).fill(0))

  for (let r = 0; r < preSum.length; r++) {
    for (let c = 0; c < preSum[0].length; c++) {
      preSum[r][c] = (r - 1 >= 0 ? preSum[r - 1][c] : 0) +
        (c - 1 >= 0 ? preSum[r][c - 1] : 0) -
        (r - 1 >= 0 && c - 1 >= 0 ? preSum[r - 1][c - 1] : 0) + mat[r][c]
    }
  }
  // console.log(preSum)

  let res = Array(mat.length).fill(0).map(e => Array(mat[0].length).fill(0))

  for (let r = 0; r < preSum.length; r++) {
    for (let c = 0; c < preSum[0].length; c++) {
      res[r][c] = preSum[Math.min(m - 1, r + k)][Math.min(n - 1, c + k)] -
        (c - k - 1 >= 0 ? preSum[Math.min(m - 1, r + k)][c - k - 1] : 0) -
        (r - k - 1 >= 0 ? preSum[r - k - 1][Math.min(n - 1, c + k)] : 0) +
        (r - k - 1 >= 0 && c - k - 1 >= 0 ? preSum[r - k - 1][c - k - 1] : 0)
    }
  }
  return res
};