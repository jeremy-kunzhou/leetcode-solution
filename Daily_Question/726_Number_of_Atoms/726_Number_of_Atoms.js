/**
 * @param {string} formula
 * @return {string}
 * 1 preprocess: map: the parenthese left idx as key, with value including right parenthese idx, multiple, next i idx
 * process function(start, end, multiple):
 * loop the string with stack to record
 * - if UpperCase letter or the end of string: 
 *   - keep stack.pop() until stack empty to get name and the count, then update hashmap with multiple
 * - if lowerCase letter: to stack
 * - if number: to stack
 * - if left parenthese: 
 *   - process(start, end, map.get(leftIdx).multiple * multiple),
 *   - set the i to the map.get(leftIdx).next
 */
var countOfAtoms = function (formula) {
  // preprocess
  let stack = []
  let map = new Map()
  for (let i = 0; i < formula.length; i++) {
    if (formula[i] == '(') {
      stack.push(i)
      map.set(i, { r: -1, multiple: 0 })
    } else if (formula[i] == ')') {
      let j = i + 1;
      let num = ""
      while (/[0-9]/.test(formula[j]) && j < formula.length) {
        num += formula[j]
        j++
      }
      if (!num) num = "1"
      let leftIdx = stack.pop()
      map.set(leftIdx, { r: i, multiple: parseInt(num), next: j - 1 })
      i = j - 1
    }
  }

  let res = new Map()

  // end is index of ')' or (endOfString + 1)
  function process(start, end, multiple) {
    let substack = []
    for (let i = start; i <= end; i++) {
      if (substack.length == 0 && /[A-Z]/.test(formula[i])) {
        substack.push(formula[i])
        continue
      }
      if ((i == end && substack.length > 0) || /[A-Z]/.test(formula[i])) {
        let count = ""
        let name = ""
        while (substack.length > 0) {
          let letter = substack.pop()
          if (/[0-9]/.test(letter)) {
            count = letter + count
          } else {
            name = letter + name
          }
        }
        if (!count) count = "1"
        res.set(name, (res.get(name) ?? 0) + parseInt(count) * multiple)
        substack.push(formula[i])
      } else if (/[a-z]/.test(formula[i])) {
        substack.push(formula[i])
      } else if (formula[i] == '(') {
        process(i + 1, map.get(i).r, map.get(i).multiple * multiple)
        i = map.get(i).next
      } else if (/[0-9]/.test(formula[i])) {
        substack.push(formula[i])
      }
    }
  }
  process(0, formula.length, 1)

  return [...res.keys()].sort().map((e) => `${e}${res.get(e) == 1 ? "" : res.get(e)}`).join('')
};