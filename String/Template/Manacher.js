/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
  let mnchStr = '^#'
  for (let i = 0; i < s.length; i++) {
    mnchStr += `${s[i]}#`
  }
  mnchStr += '$'
  const mnchRes = Array(mnchStr.length).fill(0)
  let center = 0, right = 0;
  for (let i = 1; i < mnchStr.length - 1; i++) {
    let i_mirror = center * 2 - i;
    if (i < right)
      mnchRes[i] = Math.min(mnchRes[i_mirror], right - i)
    while (mnchStr[i - 1 - mnchRes[i]] == mnchStr[i + 1 + mnchRes[i]]) {
      mnchRes[i]++
    }
    if (i + mnchRes[i] > right) {
      center = i;
      right = i + mnchRes[i]
    }
  }
  let idx = 0;
  let max = -1;
  for (let i = 1; i < mnchRes.length - 1; i++) {
    if (mnchRes[i] > max) {
      max = mnchRes[i]
      idx = i
    }
  }
  const start = (idx - max) / 2 >> 0
  return s.slice(start, start + max)
};