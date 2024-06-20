/**
 * @param {number[][]} people
 * @return {number[][]}
 */
var reconstructQueue = function (people) {
  // reverse
  // order: [2,1], [2, 0], [3, 1], [3,0]
  let minHeap = new PriorityQueue({
    compare: (e1, e2) => {
      if (e1[0] > e2[0]) return 1;
      if (e1[0] < e2[0]) return -1;

      return e1[1] < e2[1] ? 1 : -1;
    }
  });
  people.forEach(e => {
    minHeap.enqueue(e)
  })
  // let a = minHeap.dequeue()
  // console.log(a) // [ 4, 4 ]
  let res = Array(people.length).fill(null)

  while (minHeap.size() > 0) {
    let p = minHeap.dequeue()
    // find p[1] th in current blank in res
    let count = p[1]
    let pos = 0
    while (count >= 0 && pos < res.length) {
      while (res[pos] != null && pos < res.length) {
        pos++
      }
      count--;
      pos++;
    }
    pos--;
    res[pos] = [...p]
  }
  return res
};