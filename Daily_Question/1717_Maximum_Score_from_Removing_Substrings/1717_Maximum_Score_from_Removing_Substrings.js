/**
 * @param {string} s
 * @param {number} x
 * @param {number} y
 * @return {number}
 * Intuition
 * stack
 * if( y > x), step1: remove ba first and then step2: remove ab next
 * else, step1: remove ab first then step2: remove ba next
 * use stack to check the pair and update the res in each steps
 */

// TLE: simulation: TLE on test 5
var bf = function (s, x, y) {
  function process(currS) {
    const abIdx = currS.indexOf('ab')
    const baIdx = currS.indexOf('ba')
    if (abIdx == -1 && baIdx == -1) return 0;
    let max = 0;
    if (abIdx > -1) {
      max = Math.max(max, x + process(currS.slice(0, abIdx) + currS.slice(abIdx + 2)))
    }
    if (baIdx > -1) {
      max = Math.max(max, y + process(currS.slice(0, baIdx) + currS.slice(baIdx + 2)))
    }
    return max
  }
  return process(s)
}

// stack
/**
* Intuition
* stack
* if(y > x), step1: remove ba first and then step2: remove ab next
* else, step1: remove ab first then step2: remove ba next
* use stack to check the pair and update the res in each steps
*/

var stackV1 = function (s, x, y) {
  let stack = [s[0]]
  let res = 0
  let check = ['a', 'b', x]
  let nextCheck = ['b', 'a', y]
  if (y > x) {
    check = ['b', 'a', y]
    nextCheck = ['a', 'b', x]
  }
  for (let i = 1; i < s.length; i++) {
    if (stack[stack.length - 1] == check[0] && s[i] == check[1]) {
      stack.pop()
      res += check[2]
    } else {
      stack.push(s[i])
    }
  }
  s = stack.join('')
  stack = [s[0]]
  for (let i = 1; i < s.length; i++) {
    if (stack[stack.length - 1] == nextCheck[0] && s[i] == nextCheck[1]) {
      stack.pop()
      res += nextCheck[2]
    } else {
      stack.push(s[i])
    }
  }
  return res
}
var maximumGain = function (s, x, y) {
  return stackV1(s, x, y)
};