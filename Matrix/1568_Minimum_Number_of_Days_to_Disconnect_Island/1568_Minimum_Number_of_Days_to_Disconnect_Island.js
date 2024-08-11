/**
 * @param {number[][]} grid
 * @return {number}
 */
var minDays = function (grid) {
  // run dfs to find the count of islands
  // if more than 1 or zero, return 0
  // if one then:
  // try to remove any of the land in the islands and run dfs again to check the count of islands
  // if count more then one, return 1
  // else return 2
  // TC: O(m X n X m X n)
  // SC: O(m X n)
  const [m, n] = [grid.length, grid[0].length]
  const lands = []
  const visit = new Set()
  function dfs(r, c) {
    if (visit.has(`${r}_${c}`)) {
      return
    }
    lands.push([r, c])
    visit.add(`${r}_${c}`)
    const neighbours = [[r - 1, c], [r, c + 1], [r + 1, c], [r, c - 1]]
    for (const [n_r, n_c] of neighbours) {
      if (n_c > -1 && n_c < n && n_r > -1 && n_r < m && grid[n_r][n_c] == 1) {

        dfs(n_r, n_c)
      }
    }
  }

  function findIsland() {
    let count = 0
    for (let r = 0; r < m; r++) {
      for (let c = 0; c < n; c++) {
        if (grid[r][c] == 1 && !visit.has(`${r}_${c}`)) {
          dfs(r, c)
          count++
        }
      }
    }
    return count
  }

  const count = findIsland()
  if (count > 1 || count == 0) return 0
  const arrCandidates = Array.from(visit)
  for (const can of arrCandidates) {
    const [r, c] = can.split('_').map(e => Number(e))
    grid[r][c] = 0
    visit.clear()
    let count = findIsland()
    if (count > 1 || count == 0) return 1
    grid[r][c] = 1
  }
  return 2
};