/**
 * @param {number} n
 * @param {number[][]} queries
 * @return {number[]}
 */
var shortestDistanceAfterQueries = function (n, queries) {
  const map = {}

  // init
  for (let i = 0; i < n - 1; i++) {
    map[i] = [i + 1]
  }
  map[n - 1] = []

  function dj(start, end) {
    const minHeap = new MinPriorityQueue({ priority: (a) => a[0] })
    minHeap.enqueue([0, start])
    const shortest = {}
    while (minHeap.size() > 0) {
      const [w1, t1] = minHeap.dequeue().element
      if (shortest.hasOwnProperty(t1)) {
        continue
      }
      shortest[t1] = w1
      if (t1 == end) {
        return shortest
      }
      for (const n of map[t1]) {
        if (!shortest.hasOwnProperty(n)) {
          minHeap.enqueue([w1 + 1, n])
        }
      }
    }
    return shortest
  }

  const short = []
  for (const path of queries) {
    map[path[0]].push(path[1])
    const res = dj(0, n - 1)
    short.push(res[n - 1])
  }
  return short
};