/**
 * @param {number[]} rowSum
 * @param {number[]} colSum
 * @return {number[][]}
 * example:
 * rowSum =  3
 *           8
 * colSUm = 4 7
 */
var restoreMatrixOld = function (rowSum, colSum) {
  const m = rowSum.length;
  const n = colSum.length;
  const matrix = Array(m).fill(0).map(e => Array(n).fill(-1))

  let count = 0

  // find the min in rowSum and colSum
  // fill the min to the first -1 in given direction from the left or top
  // update given rowSum and colSum to subtract the min in relevant sum
  // repeat the process until all the matrix filled

  while (count < m + n) {
    const min = Math.min(...rowSum, ...colSum)
    const idxInRow = rowSum.indexOf(min)
    const idxInCol = colSum.indexOf(min)
    if (idxInRow > -1) {
      // min in rowSum
      // min is the rowId
      let targetColIdx = -1;
      for (let i = 0; i < n; i++) {
        if (targetColIdx == -1 && matrix[idxInRow][i] == -1) {
          targetColIdx = i
        }
        else if (targetColIdx > -1 && matrix[idxInRow][i] == -1) {
          matrix[idxInRow][i] = 0
        }
      }
      if (targetColIdx == -1) break;
      matrix[idxInRow][targetColIdx] = min
      rowSum[idxInRow] -= min
      colSum[targetColIdx] -= min
      if (rowSum[idxInRow] == 0) {
        rowSum[idxInRow] = Number.MAX_SAFE_INTEGER
        count++
      }
    }
    else {
      // min in colSum
      // min is the colId
      // idxInCol > -1
      let targetRowIdx = -1;
      for (let i = 0; i < m; i++) {
        if (targetRowIdx == -1 && matrix[i][idxInCol] == -1) {
          targetRowIdx = i
        }
        else if (targetRowIdx > -1 && matrix[i][idxInCol] == -1) {
          matrix[i][idxInCol] = 0
        }
      }
      if (targetRowIdx == -1) break;
      matrix[targetRowIdx][idxInCol] = min
      colSum[idxInCol] -= min
      rowSum[targetRowIdx] -= min
      if (colSum[idxInCol] == 0) {
        colSum[idxInCol] = Number.MAX_SAFE_INTEGER
        count++
      }
    }
  }

  return matrix

};

var restoreMatrix = function (rowSum, colSum) {
  const m = rowSum.length;
  const n = colSum.length;
  const matrix = Array(m).fill(0).map(e => Array(n).fill(-1))

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      const min = Math.min(rowSum[i], colSum[j])
      matrix[i][j] = min
      rowSum[i] -= min
      colSum[j] -= min
    }
  }
  return matrix
}