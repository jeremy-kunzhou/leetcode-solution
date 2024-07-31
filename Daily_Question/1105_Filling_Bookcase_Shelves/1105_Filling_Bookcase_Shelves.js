/**
 * @param {number[][]} books
 * @param {number} shelfWidth
 * @return {number}
 */
var buildKey = (arr) => arr.join('-')
var bf = function (books, shelfWidth) {
  const memo = new Map()

  function process(i, currHeight, currWidth) {
    if (i == books.length) {
      return currHeight
    }
    const key = buildKey([i, currHeight, currWidth])
    if (memo.has(key)) return memo.get(key)
    // currentSelf
    const [thickness, height] = books[i]
    let res = 10 ** 9
    if (currWidth + thickness <= shelfWidth) {
      let nextHeight = Math.max(currHeight, height)
      let nextWidth = currWidth + thickness
      let nextRes = process(i + 1, nextHeight, nextWidth)
      res = Math.min(res, nextRes)
    }

    // nextSelf
    let nextRes = process(i + 1, height, thickness) + currHeight
    res = Math.min(res, nextRes)
    memo.set(key, res)
    return memo.get(key)
  }
  return process(0, 0, 0, 0)
}

var bfOP = function (books, shelfWidth) {
  const memo = new Map()

  function process(i) {
    if (i == books.length) {
      return 0
    }
    const key = buildKey([i])
    if (memo.has(key)) return memo.get(key)
    // currentSelf

    let res = 10 ** 9
    let currWidth = 0;
    let currHeight = 0
    for (let j = i; j < books.length; j++) {
      const [thickness, height] = books[j]
      if (thickness + currWidth <= shelfWidth) {
        currHeight = Math.max(currHeight, height)
        currWidth = currWidth + thickness
        let nextRes = process(j + 1) + currHeight
        res = Math.min(res, nextRes)
      } else {
        break;
      }

    }
    memo.set(key, res)
    return memo.get(key)
  }
  return process(0)
}

var dp = function (books, shelfWidth) {
  let cache = Array(books.length + 1).fill(0)

  for (let i = books.length; i >= 0; i--) {
    if (i == books.length) {
      cache[i] = 0;
      continue
    }

    cache[i] = 10 ** 9
    let currWidth = 0;
    let currHeight = 0
    for (let j = i; j < books.length; j++) {
      const [thickness, height] = books[j]
      if (thickness + currWidth <= shelfWidth) {
        currHeight = Math.max(currHeight, height)
        currWidth = currWidth + thickness
        let nextRes = cache[j + 1] + currHeight
        cache[i] = Math.min(cache[i], nextRes)
      } else {
        break;
      }

    }

  }
  return cache[0]
}

var minHeightShelves = function (books, shelfWidth) {
  return dp(books, shelfWidth)
};