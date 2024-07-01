/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 * Intuitiion:
 * Two pointer:
 * One for nums1, one for num2
 * compare from p1 =0; p2 =0;
 * if value is the same, count ++;
 * if not:
 * move the pointer with smaller value forward;
 * doing those operation until one of the pointer out of border
 * TC: O(n1+n2)
 * SC: O(1)
 */
var getCommon = function (nums1, nums2) {
  let [p1, p2] = [0, 0];
  while (p1 < nums1.length && p2 < nums2.length) {
    if (nums1[p1] == nums2[p2]) {
      return nums1[p1]
    } else if (nums1[p1] < nums2[p2]) {
      p1++;
    } else {
      p2++
    }
  }
  return -1
};