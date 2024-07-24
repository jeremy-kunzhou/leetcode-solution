function MapSumNode() {
  this.children = Array(27).fill(null)
  this.childrenSum = Array(27).fill(0)
}

var MapSum = function () {
  this.root = new MapSumNode()
};

function charIdx(ch) {
  return ch.charCodeAt(0) - 'a'.charCodeAt(0)
}
/** 
* @param {string} key 
* @param {number} val
* @return {void}
*/
MapSum.prototype.insert = function (key, val) {
  let curr = this.root
  for (const ch of key) {
    if (!curr.children[charIdx(ch)]) {
      curr.children[charIdx(ch)] = new MapSumNode()
    }
    curr = curr.children[charIdx(ch)]
  }
  curr.childrenSum[26] = val

  function recalculate(i, curr) {
    if (i == key.length) {
      let a = curr.childrenSum.reduce((acc, e) => acc + e)
      return a
    }
    const idx = charIdx(key[i])
    curr.childrenSum[idx] = recalculate(i + 1, curr.children[idx])
    return curr.childrenSum.reduce((acc, e) => acc + e)
  }

  recalculate(0, this.root)
};

/** 
* @param {string} prefix
* @return {number}
*/
MapSum.prototype.sum = function (prefix) {
  let curr = this.root
  for (const ch of prefix) {
    if (!curr.children[charIdx(ch)]) {
      return 0
    }
    curr = curr.children[charIdx(ch)]
  }
  return curr.childrenSum.reduce((acc, e) => acc + e)
};

/** 
* Your MapSum object will be instantiated and called as such:
* var obj = new MapSum()
* obj.insert(key,val)
* var param_2 = obj.sum(prefix)
*/