/**
 * @param {number[]} arr
 * @return {number}
 */

var bf = function (arr) {
  function process(l, r) {
    if (r - l == 0) {
      return [0, arr[l]]
    }
    if (r - l + 1 == 2) {
      return [arr[l] * arr[r], Math.max(arr[l], arr[r])]
    }

    let min = [Number.MAX_SAFE_INTEGER, 0]
    for (let i = l; i < r; i++) {
      let tempL = process(l, i)
      let tempR = process(i + 1, r)
      let temp = tempL[0] + tempR[0] + tempL[1] * tempR[1]
      if (min[0] > temp) {
        min = [temp, Math.max(tempL[1], tempR[1])]
      }
    }
    return min
  }

  return process(0, arr.length - 1)[0]
}

var bfC = function (arr) {
  let cache = new Map()
  function process(l, r, cache) {
    const key = `${l},${r}`
    if (r - l == 0) {
      return [0, arr[l]]
    }
    if (r - l + 1 == 2) {
      return [arr[l] * arr[r], Math.max(arr[l], arr[r])]
    }
    if (cache.has(key)) return cache.get(key)
    let min = [Number.MAX_SAFE_INTEGER, 0]
    for (let i = l; i < r; i++) {
      let tempL = process(l, i, cache)
      let tempR = process(i + 1, r, cache)
      let temp = tempL[0] + tempR[0] + tempL[1] * tempR[1]
      if (min[0] > temp) {
        min = [temp, Math.max(tempL[1], tempR[1])]
      }
    }
    cache.set(key, min)
    return min
  }

  return process(0, arr.length - 1, cache)[0]
}

var mctFromLeafValues = function (arr) {
  return bfC(arr)
};