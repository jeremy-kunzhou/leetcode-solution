function partition(arr, mid, low, high) {
  let pivot = arr[mid], pivotloc = low;
  [arr[high], arr[mid]] = [arr[mid], arr[high]];
  for (let i = low; i < high; i++) {
    // inserting elements of less value
    // to the left of the pivot location
    if (arr[i] < pivot) {
      [arr[i], arr[pivotloc]] = [arr[pivotloc], arr[i]];
      pivotloc++;
    }
  }

  // swapping pivot to the final pivot location
  [arr[high], arr[pivotloc]] = [arr[pivotloc], arr[high]];
  return pivotloc;
}

// finds the kth position (of the sorted array)
// in a given unsorted array i.e this function
// can be used to find both kth largest and
// kth smallest element in the array.
// ASSUMPTION: all elements in arr[] are distinct
function quickSelect(arr, low, high, k) {
  if (low == high) {
    return arr[low]
  }
  let mid = Math.floor(Math.random() * (high - low) + low);
  // find the partition
  mid = partition(arr, mid, low, high);

  // if partition value is equal to the kth position,
  // return value at k.
  if (mid == k)
    return arr[mid];

  // if partition value is less than kth position,
  // search right side of the array.
  else if (mid < k)
    return quickSelect(arr, mid + 1, high, k);

  // if partition value is more than kth position,
  // search left side of the array.
  else
    return quickSelect(arr, low, mid - 1, k);
}

module.exports = { quickSelect }