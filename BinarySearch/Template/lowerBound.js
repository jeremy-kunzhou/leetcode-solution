// Finds the index of the first element in a sorted ascending list that is
// greater than or equal to a specified target value using binary search.
function lowerBound(nums, target, check, initVal) {
  let left = 0, right = nums.length;
  let ans = initVal ?? nums.length;
  check = check ?? ((a, b) => a >= b)
  while (left < right) {
    const mid = Math.floor((right + left) / 2);
    if (check(nums[mid], target)) {
      // Move the right pointer if the mid value is valid
      right = mid;
      ans = mid;
    } else {
      left = mid + 1;
    }
  }
  return ans
}

const arr = [3, 4, 5, 5, 6]
console.log(arr)
let target = 1
console.log('target', target, 'lowerBound',
  'idx', lowerBound(arr, target),
  'val', arr[lowerBound(arr, target)])

target = 4
console.log('target', target, 'upperBound',
  'idx', lowerBound(arr, target, (a, b) => a > b),
  'val', arr[lowerBound(arr, target, (a, b) => a > b)])

target = 7
console.log('target', target, 'upperBound',
  'idx', lowerBound(arr, target, (a, b) => a > b),
  'val', arr[lowerBound(arr, target, (a, b) => a > b)])

arr.sort((a, b) => b - a)
console.log(arr)
target = 4
console.log('target', target, 'lowerBound small',
  'idx', lowerBound(arr, target, (a, b) => a <= b),
  'val', arr[lowerBound(arr, target, (a, b) => a <= b)])
console.log('target', target, 'upperBound small',
  'idx', lowerBound(arr, target, (a, b) => a < b),
  'val', arr[lowerBound(arr, target, (a, b) => a < b)])

target = 3
console.log('target', target, 'lowerBound small',
  'idx', lowerBound(arr, target, (a, b) => a <= b),
  'val', arr[lowerBound(arr, target, (a, b) => a <= b)])
console.log('target', target, 'upperBound small',
  'idx', lowerBound(arr, target, (a, b) => a < b),
  'val', arr[lowerBound(arr, target, (a, b) => a < b)])
