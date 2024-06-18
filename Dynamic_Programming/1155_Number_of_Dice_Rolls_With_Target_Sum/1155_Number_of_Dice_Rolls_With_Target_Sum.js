/**
 * @param {number} n
 * @param {number} k
 * @param {number} target
 * @return {number}
 */
var bfC = function (n, k, target) {
  let mod = 10 ** 9 + 7
  const cache = new Map()
  function process(currentDice, remain, cache) {
    if (currentDice >= n) return remain == 0 ? 1 : 0;
    if (remain <= 0) return 0;
    const key = `${currentDice},${remain}`
    if (cache.has(key)) return cache.get(key)
    let count = 0;
    for (let i = 1; i <= k; i++) {
      count += process(currentDice + 1, remain - i, cache)
    }
    cache.set(key, count % mod)
    return cache.get(key)
  }
  return process(0, target, cache)
}

var dp = function (n, k, target) {
  let curr = Array(target + 1).fill(0)
  let next = Array(target + 1).fill(0)
  let mod = 10 ** 9 + 7

  for (let currentDice = n; currentDice >= 0; currentDice--) {
    curr = Array(target + 1).fill(0)
    for (let remain = 0; remain <= target; remain++) {
      if (currentDice >= n) {
        curr[remain] = remain == 0 ? 1 : 0;
        continue
      }
      if (remain <= 0) {
        curr[remain] = 0;
        continue
      }

      let count = 0;
      for (let i = 1; i <= k; i++) {
        count += remain - i >= 0 ? next[remain - i] : 0
      }
      curr[remain] = count % mod
    }
    next = curr
  }
  return curr[target]
}

var numRollsToTarget = function (n, k, target) {
  let mod = 10 ** 9 + 7
  return dp(n, k, target)
};