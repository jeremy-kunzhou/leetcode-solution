/**
 * @param {string} source
 * @param {string} target
 * @param {character[]} original
 * @param {character[]} changed
 * @param {number[]} cost
 * @return {number}
 * intuition
 * floyd-washall to get the shortest path for nodes between each other
 * loop from the index 0 using two pointer for source and target
 * if no path, return -1
 * else cost += the weight of the path from original to changed
 */
const aCode = 'a'.charCodeAt(0)
const charMap = {}
var charIdx = function (ch) {
  if (!charMap.hasOwnProperty(ch)) {
    charMap[ch] = ch.charCodeAt(0) - aCode
  }
  return charMap[ch]
}
var minimumCost = function (source, target, original, changed, cost) {
  const n = 26
  // build the adj matrix
  const dist = Array(n).fill(0).map(_ => Array(n).fill(Infinity))

  // reach sell cost is zero
  for (let i = 0; i < n; i++) {
    dist[i][i] = 0
  }

  // init based on edge vertax and weight
  for (let i = 0; i < original.length; i++) {
    dist[charIdx(original[i])][charIdx(changed[i])] = Math.min(cost[i], dist[charIdx(original[i])][charIdx(changed[i])])
  }

  // floyd-washall to find the shortest path
  for (let k = 0; k < n; k++) {
    for (let i = 0; i < n; i++) {
      for (let j = 0; j < n; j++) {
        if (dist[i][j] > dist[i][k] + dist[k][j]) {
          dist[i][j] = dist[i][k] + dist[k][j]
        }
      }
    }
  }

  let res = 0;
  for (let i = 0; i < source.length; i++) {
    if (dist[charIdx(source[i])][charIdx(target[i])] == Infinity) return -1
    res += dist[charIdx(source[i])][charIdx(target[i])]
  }
  return res
};