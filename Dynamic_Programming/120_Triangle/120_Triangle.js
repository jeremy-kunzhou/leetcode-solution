/**
 * @param {number[][]} triangle
 * @return {number}
 */

var bf = function (triangle) {
  function process(currentLevel, idx) {
    if (currentLevel >= triangle.length) return 0

    let candidates = triangle[currentLevel];
    let min = Number.MAX_SAFE_INTEGER
    min = Math.min(candidates[idx] + process(currentLevel + 1, idx),
      candidates[idx + 1] + process(currentLevel + 1, idx + 1))
    return min
  }

  return process(1, 0) + triangle[0][0]
}

var bfC = function (triangle) {
  let cache = new Map();
  function process(currentLevel, idx, cache) {
    if (currentLevel >= triangle.length) return 0
    let key = `${currentLevel},${idx}`
    if (cache.has(key)) return cache.get(key)
    let candidates = triangle[currentLevel];
    let min = Number.MAX_SAFE_INTEGER
    min = Math.min(candidates[idx] + process(currentLevel + 1, idx, cache),
      candidates[idx + 1] + process(currentLevel + 1, idx + 1, cache))
    cache.set(key, min)
    return min
  }

  return process(1, 0, cache) + triangle[0][0]
}
var minimumTotal = function (triangle) {
  return bfC(triangle)
};