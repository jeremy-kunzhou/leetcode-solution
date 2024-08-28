/**
 * @param {number[][]} grid1
 * @param {number[][]} grid2
 * @return {number}
 * dfs grid2 from 0,0
 * visitlist
 * dfs(r, c)
 * r,c in visit list
 * if given r,c is 1 in both grid2 and grid1
 *    continue mark curr num
 * if given r,c is 1 in grid2 but 0 in grid1
 *    the current island is not subisland
      put num to no island list
      continue mark curr num
 * if given r,c is 0 in grid2
 *    return
 */
var countSubIslands = function (grid1, grid2) {
  const M = grid1.length, N = grid1[0].length
  const visited = new Set();
  let islandCount = 0;
  const nonSubislandsList = new Set()
  function isValid(r, c) {
    return r >= 0 && r < M && c >= 0 && c < N
  }
  const directions = [[0, 1], [1, 0], [0, -1], [-1, 0]]
  const map = Array(M).fill(null).map(e => Array(N).fill('0'))
  function dfs(r, c, currIsland) {
    if (!isValid(r, c)) return
    if (visited.has(`${r}_${c}`)) return
    visited.add(`${r}_${c}`)
    if (grid2[r][c] == 1 && grid1[r][c] == 1) {
      if (currIsland == null) currIsland = ++islandCount
      map[r][c] = currIsland
      for (const d of directions) {
        dfs(r + d[0], c + d[1], currIsland)
      }
    } else if (grid2[r][c] == 1 && grid1[r][c] == 0) {
      if (currIsland == null) {
        currIsland = ++islandCount
      }
      nonSubislandsList.add(currIsland)
      map[r][c] = currIsland
      for (const d of directions) {
        dfs(r + d[0], c + d[1], currIsland)
      }

    } else if (grid2[r][c] == 0) {
      return
    }
  }
  for (let r = 0; r < M; r++) {
    for (let c = 0; c < N; c++) {
      if (visited.has(`${r}_${c}`) || grid2[r][c] == 0) continue
      dfs(r, c, null)
    }
  }

  return islandCount - nonSubislandsList.size
};