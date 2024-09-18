// Finds the index of the first element in a sorted ascending list that is
// greater than or equal to a specified target value using binary search.
function lowerBound(nums, target) {
  let left = 0, right = nums.length;

  while (left < right) {
    const mid = Math.floor((right + left) / 2);
    if (valid(nums[mid], target)) {
      // Move the right pointer if the mid value is valid
      right = mid;
    } else {
      left = mid + 1;
    }
  }
  return valid(nums[left], target) ? left : -1;
}

function valid(num, target) {
  // Check if the current number meets the target condition
  return num >= target;
}
