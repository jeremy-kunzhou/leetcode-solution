/**
 * @param {string} s
 * @return {number}
 */

// Simulation: TLE
var maxOperationsOrigin = function (s) {
  const arr = [...s]
  let noChange = false
  let count = 0
  let start = 0
  while (!noChange) {
    noChange = true
    let i = start;
    let first = true
    while (i < s.length) {
      if (arr[i] == '1') {
        first = false
        let j = i + 1;
        while (j < s.length) {
          if (arr[j] == '0') {
            j++
          } else {
            break
          }
        }
        if (j > i + 1) {
          noChange = false
          arr[i] = '0'
          arr[j - 1] = '1'
          count++

        }
        i = j
      }
      else {
        i++
        if (first) {
          start = i - 1
        }
      }

    }
  }
  return count
};

// example: 1001101
// which is the same as 101101
// the question equals to move all the zero to the left to make no '1' before '0'
var maxOperations = function (s) {
  const arr = [...s]
  let countOne = arr.filter(e => e == '1').length
  const n = s.length;
  let res = 0
  for (let i = n - 1; i >= 0; i--) {
    if (arr[i] == '1') {
      countOne--;
    } else if (arr[i] == '0') {
      // make sure this '0' is the most right '0' in the full '0' substring
      if (i + 1 == n || arr[i + 1] == '1') {
        // add the number of one to the left of the error
        res += countOne
      }
    }
  }
  return res

}