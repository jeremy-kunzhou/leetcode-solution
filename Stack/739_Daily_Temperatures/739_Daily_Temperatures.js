/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
// monotonic stack: increasing
// time: O(n)
// space: O(n)
var dailyTemperatures = function (temperatures) {
  let stack = []
  let res = Array(temperatures.length).fill(0)
  for (let i = 0; i < temperatures.length; i++) {
    const temp = temperatures[i];
    while (stack.length > 0 && temperatures[stack[stack.length - 1]] < temp) {
      const idx = stack.pop()
      res[idx] = i - idx
    }
    stack.push(i)
  }
  return res
};