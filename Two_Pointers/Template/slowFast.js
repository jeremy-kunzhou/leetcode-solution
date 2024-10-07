// Linkedlist: 
// find the idx floor(n / 2)[mid] element if odd or 
//      the idx n / 2[mid + 1] element if even
var getHalf = function (head) {
  let slowP = head;
  let fastP = head;
  while (fastP && fastP.next) {
    slowP = slowP.next
    fastP = fastP.next.next
  }
  return slowP
}
