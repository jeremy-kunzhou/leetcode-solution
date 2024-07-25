/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function (intervals) {
  intervals.sort((a, b) => a[0] - b[0] || a[1] - b[1])
  let temp = [...intervals[0]]
  let res = []
  for (let i = 1; i < intervals.length; i++) {
    const [start, end] = intervals[i]
    if (start > temp[1]) {
      res.push([...temp])
      temp = [start, end]
    } else {
      temp = [Math.min(start, temp[0]), Math.max(end, temp[1])]
    }
  }
  res.push([...temp])
  return res
};