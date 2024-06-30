/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solve = function (board) {
  let m = board.length;
  let n = board[0].length;
  let visit = new Set()

  function dfs(r, c, operation) {
    if (visit.has(`${r}_${c}`)) return
    if (r < 0 || c < 0 || r == m || c == n || board[r][c] != 'O') {
      return
    }
    operation(r, c)
    visit.add(`${r}_${c}`)
    const op = [[0, -1], [0, 1], [1, 0], [-1, 0]]
    for (let o of op) {
      dfs(r + o[0], c + o[1], operation)
    }
  }

  for (let r = 0; r < m; r++) {
    for (let c = 0; c < n; c++) {
      if (board[r][c] == "O" && (
        r == 0 || r == m - 1 || c == 0 || c == n - 1
      )) {
        dfs(r, c, (i, j) => {
          board[i][j] = 'S'
        })
      }
    }
  }
  for (let r = 0; r < m; r++) {
    for (let c = 0; c < n; c++) {
      if (board[r][c] == "O") {
        board[r][c] = 'X'

      }
    }
  }
  for (let r = 0; r < m; r++) {
    for (let c = 0; c < n; c++) {
      if (board[r][c] == "S") {
        board[r][c] = 'O'

      }
    }
  }
};