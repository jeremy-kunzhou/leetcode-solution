/**
 * @param {character[][]} board
 * @return {boolean}
 */
var check = function (arr) {
  let temp = arr.filter(e => e !== '.')
  let set = new Set(temp)
  return set.size == temp.length
}

var isValidSudoku = function (board) {
  // check row
  for (let i = 0; i < 9; i++) {
    if (!check(board[i])) {
      return false
    }
  }

  // check column
  for (let i = 0; i < 9; i++) {
    let arr = []
    for (let j = 0; j < 9; j++) {
      arr.push(board[j][i])
    }
    if (!check(arr)) {
      return false
    }
  }

  // check cell
  const list = [
    [1, 1], [1, 4], [1, 7],
    [4, 1], [4, 4], [4, 7],
    [7, 1], [7, 4], [7, 7],
  ]
  const locations = [
    [-1, -1], [-1, 0], [-1, 1],
    [0, -1], [0, 0], [0, 1],
    [1, -1], [1, 0], [1, 1],
  ]

  for (let center of list) {
    let arr = locations.map(e => board[center[0] + e[0]][center[1] + e[1]])
    if (!check(arr)) {
      return false
    }
  }
  return true
};