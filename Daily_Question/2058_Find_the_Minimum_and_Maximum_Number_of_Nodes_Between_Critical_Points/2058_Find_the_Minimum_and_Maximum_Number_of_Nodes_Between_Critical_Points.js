/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {number[]}
 * intuition:
 * build preProcess array: 
 * 0: value > pre value2 1: value == pre value 2: value < pre value
 * 
 * loop the array: find pattern [0, 2] or [2, 0] and update the min and max distance
 * 
 * TC: O(n)
 * SC: O(n)
 */
var nodesBetweenCriticalPointsFirst = function (head) {
  const preArray = [];
  let pre = head;
  let curr = head.next
  while (curr) {
    if (pre.val < curr.val) {
      preArray.push(0)
    } else if (pre.val > curr.val) {
      preArray.push(2)
    } else {
      preArray.push(1)
    }
    pre = curr;
    curr = curr.next
  }
  let min = preArray.length
  let max = - min
  let preIdx = -1 // the pre or recent critical point
  let firstIdx = -1 // the first critical point
  for (let i = 1; i < preArray.length; i++) {
    if ((preArray[i - 1] == 2 && preArray[i] == 0) || (preArray[i - 1] == 0 && preArray[i] == 2)) {
      const idx = i - 1
      // first idx found
      if (preIdx == -1) {
        firstIdx = idx
      } else {
        min = Math.min(min, idx - preIdx)
        max = idx - firstIdx
      }
      // update recent idx
      preIdx = idx
    }
  }
  return min == preArray.length ? [-1, -1] : [min, max]
};

// optimize
// TC: O(n)
// SC: O(1)
var nodesBetweenCriticalPoints = function (head) {
  let min = 100005
  let max = - min
  let preIdx = -1 // the pre or recent critical point
  let firstIdx = -1 // the first critical point
  let count = 0
  let pre = head;
  let curr = head.next
  while (curr && curr.next) {
    if ((pre.val < curr.val && curr.val > curr.next.val)
      || (pre.val > curr.val && curr.val < curr.next.val)) {
      const idx = count
      // first idx found
      if (preIdx == -1) {
        firstIdx = idx
      } else {
        min = Math.min(min, idx - preIdx)
        max = idx - firstIdx
      }
      // update recent idx
      preIdx = idx
    }
    pre = curr;
    curr = curr.next
    count++;
  }
  return min == 100005 ? [-1, -1] : [min, max]
};