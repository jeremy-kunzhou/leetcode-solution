
function TrieNode() {
  this.word = false;
  this.children = new Map();
}

class Trie {
  constructor() {
    this.root = new TrieNode();
  }

  add(word) {
    let curr = this.root;
    for (const ch of word) {
      if (!curr.children.has(ch)) {
        curr.children.set(ch, new TrieNode())
      }
      curr = curr.children.get(ch)
    }
    curr.word = true
  }

  search(word) {
    let curr = this.root;
    for (const ch of word) {
      if (!curr.children.has(ch)) {
        return false
      }
      curr = curr.children.get(ch)
    }
    return curr.word
  }

  startWith(prefix) {
    let curr = this.root;
    for (const ch of prefix) {
      if (!curr.children.has(ch)) {
        return false
      }
      curr = curr.children.get(ch)
    }
    return true
  }
}
