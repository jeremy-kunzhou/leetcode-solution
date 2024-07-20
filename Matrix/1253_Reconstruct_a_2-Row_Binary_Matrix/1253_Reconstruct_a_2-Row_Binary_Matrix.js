/**
 * @param {number} upper
 * @param {number} lower
 * @param {number[]} colsum
 * @return {number[][]}
 * intuition
 * 0 build matrix
 * 1 fill the two cell in column which colsum is 2
 * 2 fill the rest by min which min(rowSum[j], colsum[i]) if larger than 1, use 1
 *   - update rowSum and colsum
 * 3 if any of rowSum or colsum has element not zero, return []
 * 4 return the matrix
 */
var reconstructMatrix = function (upper, lower, colsum) {
  const rowSum = [upper, lower]
  const matrix = Array(2).fill(0).map(_ => Array(colsum.length).fill(-1))

  // fill 2 first
  for (let i = 0; i < colsum.length; i++) {
    if (colsum[i] != 2) continue
    matrix[0][i] = 1
    matrix[1][i] = 1;
    rowSum[0]--
    rowSum[1]--
    colsum[i] = 0
  }
  for (let j = 0; j < 2; j++) {
    for (let i = 0; i < colsum.length; i++) {
      if (matrix[j][i] == -1) {
        let min = Math.min(rowSum[j], colsum[i])
        min = min > 1 ? 1 : min
        rowSum[j] -= min
        colsum[i] -= min
        matrix[j][i] = min
      }
    }
  }
  if (rowSum.some(e => e > 0) || colsum.some(e => e > 0)) return []
  return matrix
};