/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 * two pointers
 */
var mergeNodes = function (head) {
  let p1 = null
  let p2 = head
  let currSum = 0
  while (p2) {
    if (p2.val == 0) {
      if (p1 != null) {
        p1.val = currSum
        currSum = 0
      }
    } else {
      if (p1 == null) {
        p1 = p2
        currSum += p2.val
      } else {
        if (currSum == 0) {
          p1.next = p2
          p1 = p2
        }
        currSum += p2.val
      }
    }
    p2 = p2.next
  }
  if (p1) p1.next = null
  return head.next
};