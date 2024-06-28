/**
 * @param {number} n
 * @param {number[][]} roads
 * @return {number}
 * 
 * Time: O(n*logn)
 * Space: O(n)
 */
var maximumImportance = function (n, roads) {
  let connection = Array(n).fill(0)
  for (let road of roads) {
    connection[road[0]]++;
    connection[road[1]]++;
  }

  let priority = connection.map((e, idx) => ([e, idx])).sort((a, b) => a[0] - b[0])
  let map = new Map()
  for (let i = 0; i < priority.length; i++) {
    map.set(priority[i][1], i + 1)
  }
  return roads.reduce((acc, road) => acc + map.get(road[0]) + map.get(road[1]), 0)
};