/**
 * @param {string[]} arr
 * @param {number} k
 * @return {string}
 * intuition:
 * 1
 * hashmap to count the frequency times of the element
 * map[el] = [count, el, index] [O(n)]
 * map.values() -> array and filter by count == 1 and then sort by index [O(nlogn)]
 * return the kth (1-indexed) in result
 * if result length < kth, return ''

 * 2 
 * hashmap to count the frequency times of the element [O(n)]
 * loop the arr, if map[arr[i]] == 1, mark it, until mark the kth one [O(n)]
 */
var kthDistinct = function (arr, k) {
  const map = {}

  for (const str of arr) {
    map[str] = (map[str] ?? 0) + 1
  }

  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (map[arr[i]] == 1) {
      count++;
      if (count == k) {
        return arr[i]
      }
    }
  }
  return ""
};