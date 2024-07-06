/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var reverseKGroup = function (head, k) {
  const dummyHead = new ListNode(0, head)

  function reverse(pre, start, end) {
    let currPre = pre
    let curr = start
    while (currPre !== end) {
      const temp = curr.next;
      curr.next = currPre;
      currPre = curr
      curr = temp
    }

    pre.next = currPre
    start.next = curr
  }

  let count = 0;
  let curr = head;
  let currStart = head;
  let currEnd = null;
  let currPre = dummyHead
  while (curr != null) {
    count++;
    if (count == k) {
      currEnd = curr
      const temp = curr.next
      reverse(currPre, currStart, currEnd)
      count = 0;
      currPre = currStart
      currStart = temp
      currEnd = null
      curr = temp
    } else {
      curr = curr.next
    }
  }
  return dummyHead.next
};