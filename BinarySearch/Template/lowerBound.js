// Finds the index of the first element in a sorted list that is
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
  return left;
}

function valid(num, target) {
  // Check if the current number meets the target condition
  return num >= target;
}

// Finds the index of the last element in a sorted list that is
// greater than or equal to a specified target value using binary search.
function lastBound(nums, target) {
  let left = 0, right = nums.length;

  while (left < right) {
    const mid = Math.ceil((right + left) / 2);
    if (valid(nums[mid], target)) {
      // Move the right pointer if the mid value is valid
      left = mid;
    } else {
      right = mid - 1;
    }
  }
  return right;
}