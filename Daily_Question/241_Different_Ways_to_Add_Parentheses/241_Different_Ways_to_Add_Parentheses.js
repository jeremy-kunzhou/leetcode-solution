/**
 * @param {string} expression
 * @return {number[]}
 * change the operator priority
 * permutation the operation
 * backtracking
 */
var diffWaysToCompute = function (expression) {
  const arr = []
  let currNum = 0
  const op = ['-', '*', '+']
  for (const ch of expression) {
    if (ch == '-' || ch == '*' || ch == '+') {
      arr.push(currNum)
      currNum = 0
      arr.push(ch)
    } else {
      currNum = currNum * 10 + Number(ch)
    }
  }
  arr.push(currNum)
  function calc(arr) {
    if (arr[1] == '+') {
      return arr[0] + arr[2]
    } else if (arr[1] == '-') {
      return arr[0] - arr[2]
    } else {
      return arr[0] * arr[2]
    }
  }
  const res = []
  function backtracking(L, R) {
    if (R == L) return [arr[L]]
    if (R - L + 1 == 3) {
      return [calc(arr.slice(L, R + 1))]
    }
    let currRes = []
    for (let i = L; i <= R; i++) {
      if (op.indexOf(arr[i]) > -1) {
        let leftRes = backtracking(L, i - 1)
        let rightRes = backtracking(i + 1, R)

        for (const n1 of leftRes) {
          for (const n2 of rightRes) {
            if (arr[i] == '+') {
              currRes.push(n1 + n2)
            } else if (arr[i] == '-') {
              currRes.push(n1 - n2)
            } else {
              currRes.push(n1 * n2)
            }
          }
        }

      }
    }
    return currRes

  }
  return backtracking(0, arr.length - 1)
};