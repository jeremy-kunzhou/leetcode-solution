// find the majority element in the arr
// count(num) * 2 > arr.len
// Boyer-Moore Majority Voting Algorithm
function voting(arr) {
  let majority = 0;
  let count = 0;
  for (const num of arr) {
    if (count == 0) {
      majority = num
    }
    if (num == majority) {
      count++
    } else {
      count--
    }
  }
  return majority
}

module.exports = { voting }