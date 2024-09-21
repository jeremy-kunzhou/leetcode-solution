/**
 * @param {number} n
 * @return {number[]}
 * Consider tree structure to demonstrate the target array based on the
 *  rules of lexicographical order of number string
 */


var dfs = function (n) {
  const res = []
  for (let i = 1; i < Math.min(10, n + 1); i++) {
    gen(i)
  }

  function gen(val) {
    res.push(val)
    for (let i = 0; i < 10; i++) {
      if (val * 10 + i <= n) {
        gen(val * 10 + i)
      } else {
        break
      }
    }
  }
  return res
};

var iteration = function (n) {
  const res = []
  const queue = []
  for (let i = 1; i < Math.min(10, n + 1); i++) {
    queue.push(i)
    while (queue.length > 0) {
      const val = queue.shift()
      res.push(val)
      for (let i = 9; i >= 0; i--) {
        if (val * 10 + i <= n) {
          queue.unshift(val * 10 + i)
        }
      }
    }
  }
  return res
};



var lexicalOrder = function (n) {
  return dfs(n)
}