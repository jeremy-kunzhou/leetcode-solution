/**
 * @param {number[]} values
 * @return {number}
 */

var bf = function (values) {
  let cache = new Map()
  function process(i, j, cache) {
    let key = `${i},${j}`
    if (j - i == 1) {
      return 0
    }
    if (cache.has(key)) return cache.get(key)
    let min = Number.MAX_SAFE_INTEGER
    for (let k = i + 1; k < j; k++) {
      let temp = process(i, k, cache) + process(k, j, cache) + values[i] * values[k] * values[j]
      min = Math.min(min, temp)
    }
    cache.set(key, min)
    return min
  }

  return process(0, values.length - 1, cache)

}
var minScoreTriangulation = function (values) {
  return bf(values)
};