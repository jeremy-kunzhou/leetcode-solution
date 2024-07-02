/**
 * @param {character[][]} board
 * @param {string[]} words
 * @return {string[]}
 * Intuition:
 * Trie and the dfs for matrix
 * 1 using the words to build trie
 * 2 search matrix for each cell and there neighbour (matrix dfs (with visit set))
 */

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


var findWords = function (board, words) {
  const m = board.length, n = board[0].length
  const trie = new Trie();
  words.forEach(w => trie.add(w))
  const res = new Set()
  function dfs(r, c, currWord, node, visit) {
    const key = `${r}_${c}`
    if (r < 0 || c < 0 || r == m || c == n || !node.children.has(board[r][c])) return
    //if (visit.has(key)) return
    if (board[r][c] == '#') return
    const newWord = currWord + board[r][c]
    const newNode = node.children.get(board[r][c])
    if (newNode.word) {
      res.add(newWord)
      // set to null for avoid repeat
      newNode.word = false
    }

    // use mark # for visit: visit.add(key)
    const temp = board[r][c]
    board[r][c] = '#'
    dfs(r - 1, c, newWord, newNode, visit)
    dfs(r + 1, c, newWord, newNode, visit)
    dfs(r, c - 1, newWord, newNode, visit)
    dfs(r, c + 1, newWord, newNode, visit)
    // restore
    // visit.remove(key)
    board[r][c] = temp

  }

  for (let r = 0; r < m; r++) {
    for (let c = 0; c < n; c++) {
      const visit = new Set()
      dfs(r, c, "", trie.root, visit)
    }
  }
  return [...res]
};