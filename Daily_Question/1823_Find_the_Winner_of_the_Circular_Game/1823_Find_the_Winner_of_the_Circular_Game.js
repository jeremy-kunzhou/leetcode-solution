/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 * bf: try to simulate the game 
 * example: n = 5 k = 2 startPosition = 0
 * init: 1 2 3 4 5 

 * 1 round: len = 5, startPosition = 0
 * targetIdx = (2 + 0 - 1) % 5 = 1
 * after first round: 
 * 1 3 4 5
 * startPosition: (1) % (5 - 1) = 1

 * 2 round: len = 4, startPosition = 1
 * targetIdx = (2 + 1 -1 ) % 4 = 2
 * after second round:
 * 1 3 5
 * startPosition = (2) % (4 - 1) = 2

 * 3 round: len = 3, startPosition = 2
 * targetIdx = (2 + 2 -1 ) % 3 = 0
 * after round:
 * 3 5
 * startPosition = (0) % (3 - 1) = 0

 * 4 round: len = 2, startPosition = 0
 * targetIdx = (2 + 0 -1) % 2 = 1
 * after found:
 * 3
 * startPosition = (0) % (2 -1) = 0

 */

var bf = function (n, k) {
  const arr = Array(n).fill(0).map((_, idx) => idx + 1)
  let startPosition = 0
  let len = arr.length
  while (arr.length > 1) {
    len = arr.length
    const targetIdx = (k + startPosition - 1) % len
    arr.splice(targetIdx, 1)
    startPosition = (targetIdx) % (len - 1)
  }
  return arr[0]
}

var findTheWinner = function (n, k) {
  return op(n, k)
};