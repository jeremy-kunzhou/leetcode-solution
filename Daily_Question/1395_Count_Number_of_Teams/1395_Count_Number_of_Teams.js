/**
 * @param {number[]} rating
 * @return {number}
 *   loop 0 - n -3 as i
 *   - loop from i + 1 to n -1 as j
 *     - loop from j + 1 to n - 1
 *       - find three rating in increasing order to decreasing order: update res += 1
 *  TC: O(n ^ 3)
 */
var numTeamsV1 = function (rating) {
  const n = rating.length
  let res = 0
  for (let i = 0; i <= n - 3; i++) {
    for (let j = i + 1; j <= n - 1; j++) {
      for (let k = j + 1; k <= n - 1; k++) {
        if ((rating[i] < rating[j] && rating[j] < rating[k]) ||
          (rating[i] > rating[j] && rating[j] > rating[k])) {
          res++
        }
      }
    }
  }
  return res
};


/*
*  loop from 1 to n - 2 as i
*  - loop from i + 1 to n - 1 as j
*  [memory]count two values of i-index and j-index in increasing order to decreasing order for j-index element
*  loop from 0 to n - 3 as i
*  - loop from i + 1 to n - 2 as j
*    - if two value in increasing order: res += memo[j].larger
*    - else: res += memo[j].lesser
*  
*  TC: O(n ^ 2)
*/
var numTeams = function (rating) {
  const n = rating.length
  let res = 0
  // [less, large][]
  const memo = Array(n).fill(0).map(_ => Array(2).fill(0))

  // O(n ^ 2)
  for (let j = 1; j <= n - 1; j++) {
    let less = 0
    let large = 0
    for (let k = j + 1; k <= n - 1; k++) {
      if (rating[j] < rating[k]) {
        large++
      } else {
        less++
      }
      memo[j] = [less, large]
    }
  }

  // O(n ^ 2)
  for (let i = 0; i <= n - 3; i++) {
    for (let j = i + 1; j <= n - 1; j++) {
      if (rating[i] < rating[j]) {
        res += memo[j][1]
      } else { // rating[i] > rating[j]
        res += memo[j][0]
      }
    }
  }
  return res
};