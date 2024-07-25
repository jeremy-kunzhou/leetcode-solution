/**
 * @param {number[][]} intervals
 * @return {number}
 */
var eraseOverlapIntervals = function (intervals) {
  intervals.sort((a, b) => a[0] - b[0])
  let res = 0;
  let preEnd = intervals[0][1]
  for (let i = 1; i < intervals.length; i++) {
    const [start, end] = intervals[i]
    if (start >= preEnd) {
      preEnd = end
    } else {
      res++;
      preEnd = Math.min(preEnd, end)
    }
  }
  return res
};