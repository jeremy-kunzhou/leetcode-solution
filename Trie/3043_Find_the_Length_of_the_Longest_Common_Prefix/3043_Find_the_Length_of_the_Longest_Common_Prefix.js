/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number}
 * Could use 0-9 array instead of map in the TireNode
 */

var TrieNode = function () {
  this.children = {}
  this.isWord = false
}
var longestCommonPrefix = function (arr1, arr2) {

  const trieRoot = buildTrie(arr2)

  let max = 0
  for (const word of arr1) {
    max = Math.max(max, checkLength("" + word, trieRoot))
  }
  return max


  function checkLength(word, node) {
    let curr = node
    let length = 0
    for (const ch of word) {
      if (curr.children[ch] == undefined) {
        break
      }
      curr = curr.children[ch]
      length++
    }
    return length
  }


  function buildTrie(arr) {
    const root = new TrieNode()
    for (const words of arr) {
      const word = "" + words
      let curr = root
      for (const ch of word) {
        if (curr.children[ch] == undefined) {
          curr.children[ch] = new TrieNode()
        }
        curr = curr.children[ch]
      }
      curr.isWord = true
    }
    return root
  }
};