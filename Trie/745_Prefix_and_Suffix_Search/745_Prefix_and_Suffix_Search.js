function TrieNode() {
  this.wordIdx = -1
  this.children = new Map();
}
class Trie {
  constructor() {
    this.root = new TrieNode()
  }

  add(word, idx) {
    let curr = this.root
    for (const ch of word) {
      if (!curr.children.has(ch)) {
        curr.children.set(ch, new TrieNode())
      }
      curr = curr.children.get(ch)
      curr.wordIdx = idx
    }
  }

  startWith(prefix) {
    let curr = this.root
    for (const ch of prefix) {
      if (!curr.children.has(ch)) return -1
      curr = curr.children.get(ch)
    }
    return curr.wordIdx
  }
}
/**
* @param {string[]} words
* Intuition:
* Option1: TrieNode with prefixChildren and suffixChildren
* when search, from prefix and suffix at the same time
* Option2: use hint with suffix{word tricks, record the idx of word in each node
*/
var WordFilter = function (words) {
  this.trie = new Trie();
  this.words = words;
  words.forEach((e, idx) => {
    for (let i = 0; i <= e.length; i++) {
      const w = e.substring(i) + "{" + e
      this.trie.add(w, idx)
    }
  })
};

/** 
* @param {string} pref 
* @param {string} suff
* @return {number}
*/
WordFilter.prototype.f = function (pref, suff) {
  const list = this.trie.startWith(`${suff}{${pref}`)
  return list
};

/** 
* Your WordFilter object will be instantiated and called as such:
* var obj = new WordFilter(words)
* var param_1 = obj.f(pref,suff)
*/