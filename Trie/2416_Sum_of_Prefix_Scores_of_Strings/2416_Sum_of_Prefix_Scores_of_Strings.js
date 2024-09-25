/**
 * @param {string[]} words
 * @return {number[]}
 * Use Trie and count the number of word with curr prefix
 */
var TrieNode = function () {
  this.children = {}
  this.wordsCount = 0
}
var sumPrefixScores = function (words) {

  const trieRoot = buildTrie(words)

  const res = Array(words.length).fill(0)
  for (let i = 0; i < words.length; i++) {
    res[i] = count(words[i], trieRoot)
  }
  return res

  function count(word, root) {
    let count = 0;
    let curr = root;
    for (const ch of word) {
      if (curr.children[ch] == undefined) {
        break;
      }
      curr = curr.children[ch]
      count += curr.wordsCount
    }
    return count
  }

  function buildTrie(words) {
    const root = new TrieNode()
    for (const word of words) {
      let curr = root;
      for (const ch of word) {
        if (curr.children[ch] == undefined) {
          curr.children[ch] = new TrieNode()
        }
        curr = curr.children[ch]
        curr.wordsCount += 1
      }
    }
    return root
  }
};