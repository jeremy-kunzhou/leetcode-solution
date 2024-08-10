/**
 * @param {number[][]} grid
 * @return {number}
 */

var check = function (topLeft, grid) {
  let [r, c] = topLeft;

  let arr = Array(9).fill(1)
  let col = [0, 0, 0]
  for (let i = r; i < r + 3; i++) {
    let row = 0
    for (let j = c; j < c + 3; j++) {
      col[j - c] += grid[i][j]
      row += grid[i][j]
      if (grid[i][j] >= 1 && grid[i][j] <= 9 && arr[grid[i][j] - 1]) {
        arr[grid[i][j] - 1] = 0
      } else {
        return false
      }
      if ((i - r) == 2) {
        if (col[j - c] != 15) return false
      }
    }
    if (row != 15) return false

  }
  if (grid[r][c] + grid[r + 1][c + 1] + grid[r + 2][c + 2] != 15) return false
  if (grid[r + 2][c] + grid[r + 1][c + 1] + grid[r][c + 2] != 15) return false

  return true
}
var numMagicSquaresInside = function (grid) {
  let res = 0
  for (let r = 0; r < grid.length - 2; r++) {
    for (let c = 0; c < grid[0].length - 2; c++) {
      if (check([r, c], grid)) {
        res++
      }
    }
  }
  return res
};