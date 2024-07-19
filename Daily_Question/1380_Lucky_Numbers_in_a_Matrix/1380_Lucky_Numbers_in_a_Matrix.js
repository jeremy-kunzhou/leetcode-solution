/**
 * @param {number[][]} matrix
 * @return {number[]}
 * analyze:
 * example:
 * 3  7   8
 * 9  11 13
 * 15 16 17
 * res: 15
 * 1 [wrong approach]
 * get the min of the row to : 3 9 15
 * get the max from the pre-result
 * 
 * 1 10 4 2          1
 * 9 3 8 7           3
 * 15 16 17 12       12
 * res 12
 * 
 * 7 8     7
 * 1 2     1
 * res 7
 * 

 * wrong
 * 3 6    3
 * 7 1    1
 * 5 2    2
 * 4 8    4
 */

/**
 * Approach
 * loop the matrix to get the minOfRows and the maxOfColumn
 * check if any common element in those array
 * if has, this element is the lucky number
 * if not, there is no lucky number of the given matrix
 */
// TC: O(m * n)
// SC: O(max(m, n))
var luckyNumbers = function (matrix) {
  const m = matrix.length
  const n = matrix[0].length
  let minRowArray = [] //length m
  for (let i = 0; i < matrix.length; i++) {
    minRowArray.push(matrix[i][0])
  }
  let maxColumnArray = [...matrix[0]] // length n

  // O(m * n)
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      minRowArray[i] = Math.min(minRowArray[i], matrix[i][j])
      maxColumnArray[j] = Math.max(maxColumnArray[j], matrix[i][j])
    }
  }
  let res = []
  let source = minRowArray
  let target = maxColumnArray
  if (m > n) {
    source = maxColumnArray
    target = minRowArray
  }
  // O(min(m, n))
  const set = new Set(target)
  for (const val of source) {
    if (set.has(val)) res.push(val)
  }
  return res

};