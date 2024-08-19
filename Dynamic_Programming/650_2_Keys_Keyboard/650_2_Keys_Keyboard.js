/**
 * @param {number} n
 * @return {number}
 * dp
 */

var bf = function (n) {
  if (n == 1) return 0
  const memo = new Map()
  function gen(...arr) {
    return arr.join('-')
  }

  function process(currLength, copyLength) {
    if (currLength == n) {
      return 0
    }
    if (currLength > n) {
      return Number.MAX_SAFE_INTEGER
    }
    let key = gen(currLength, copyLength)
    if (memo.has(key)) return memo.get(key)
    // copy
    let op = Number.MAX_SAFE_INTEGER

    // copy + paste
    op = Math.min(op, 2 + process(currLength * 2, currLength))

    // paste only
    op = Math.min(op, 1 + process(currLength + copyLength, copyLength))

    memo.set(key, op)
    return memo.get(key)
  }
  return 1 + process(1, 1)
}

var dp = function (n) {
  if (n == 1) return 0
  const dp = Array(n + 1).fill(0).map(e => Array(n + 1).fill(0).map(e => Number.MAX_SAFE_INTEGER))

  for (let currLength = n; currLength >= 0; currLength--) {
    for (let copyLength = n; copyLength >= 0; copyLength--) {
      if (currLength == n) {
        dp[currLength][copyLength] = 0
        continue
      }
      if (currLength > n) {
        dp[currLength][copyLength] = Number.MAX_SAFE_INTEGER
        continue
      }

      let op = Number.MAX_SAFE_INTEGER
      // copy + paste
      if (currLength * 2 < n + 1)
        op = Math.min(op, 2 + dp[currLength * 2][currLength])

      if (currLength + copyLength < n + 1)
        op = Math.min(op, 1 + dp[currLength + copyLength][copyLength])

      dp[currLength][copyLength] = op
    }
  }


  return 1 + dp[1][1]

}

var minSteps = function (n) {
  return dp(n)
};