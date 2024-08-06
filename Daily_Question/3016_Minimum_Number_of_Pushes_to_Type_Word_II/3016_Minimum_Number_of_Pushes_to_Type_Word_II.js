/**
 * @param {string} word
 * @return {number}
 * intuition
 * greedy
 * find the frequency of the lowercase letters in the word O(n)
 * sort the frequency. 
 * the top eight letters will be assigned to eight keys
 * and then continue to assigned th next top eight letters; types twice for each letter appear
 * and then for the rest of the letters. type three times for each letter appear
 *  
 */
var minimumPushes = function (word) {
  let map = new Map()
  for (const ch of word) {
    map.set(ch, (map.has(ch) ? map.get(ch) : 0) + 1)
  }
  let heap = new MaxPriorityQueue();
  Array.from(map.values()).forEach(e => heap.enqueue(e))
  let count = 0
  let typeTimes = 1
  let res = 0
  while (heap.size() > 0) {
    const freq = heap.dequeue().element
    res += (freq * typeTimes)
    count++
    typeTimes = Math.floor(count / 8) + 1
  }
  return res
};