// REF: https://leetcode.com/problems/coin-change-ii/description/
// Title: 518. Coin Change II

/**
 * @param {number} amount
 * @param {number[]} coins
 * @return {number}
 */

var bf = function (amount, coins) {

  let result = [];
  let resSet = []
  function process(current, targetAmount) {
    if (targetAmount == 0) {
      console.log({ result })
      resSet.push([...result])
      return 1;
    }
    if (current >= coins.length) return 0;
    let total = process(current + 1, targetAmount)

    let newTargetAmount = targetAmount - coins[current];
    if (newTargetAmount >= 0) {
      result.push(coins[current])
      total += process(current, newTargetAmount)
      result.pop()
    }
    // for (let i = current; i < coins.length; i++) {
    //     let newTargetAmount = targetAmount - coins[i];
    //     if (newTargetAmount >= 0) {
    //         result.push(coins[i])
    //         total += process(newTargetAmount)
    //         result.pop()
    //     }
    // }
    return total
  }

  // console.log(resSet)
  return process(0, amount)
}

var dp = function (amount, coins) {
  let curr = Array(amount + 1).fill(0)
  let next = Array(amount + 1).fill(0)

  for (let current = coins.length; current >= 0; current--) {
    curr = Array(amount + 1).fill(0)
    for (let targetAmount = 0; targetAmount <= amount; targetAmount++) {
      if (targetAmount == 0) {
        curr[0] = 1
      } else {
        let total = next[targetAmount]
        let newTargetAmount = targetAmount - coins[current];
        if (newTargetAmount >= 0) {
          total += curr[newTargetAmount]
        }
        curr[targetAmount] = total
      }
    }
    next = curr
  }

  return curr[amount]

}

var change = function (amount, coins) {
  return dp(amount, coins)
};