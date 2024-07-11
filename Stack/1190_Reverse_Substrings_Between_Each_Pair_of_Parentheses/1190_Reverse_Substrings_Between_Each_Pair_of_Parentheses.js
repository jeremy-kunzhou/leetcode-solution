/**
 * @param {string} s
 * @return {string}
 * intuition:
 * use stack to simulate the action
 * if char == lowercase letter, push to stack
 * if char == '(' push to stack
 * if char == ')' pop stack untile found '('
 * - if stack is not empty: push backward from the end
 * - if stack is empty; push current temp.join('') to the stack
 */
// PASS
// TC: O(n ^ 2)
// SC: O(n)
var reverseParenthesesV1 = function (s) {
  const stack = []

  for (const ch of s) {
    if (ch == ')') {
      const temp = [];
      let t = stack.pop()
      while (t !== '(') {
        temp.push(t)
        t = stack.pop()
      }
      if (stack.length == 0) {
        stack.push(temp.join(''))
      } else {
        for (let i = 0; i < temp.length; i++) {
          stack.push(temp[i])
        }
      }
    } else {
      stack.push(ch)
    }
  }
  return stack.join('')
};

/**
* @param {string} s
* @return {string}
* intuition:
* loop the string
* if char == '(', 
* - recursive call to process(level+1, i+1)
* - get the res 
* - i = res[0]
* - based on currlevel % 2, push or unshift res[1] to stack 
* if char == ')' 
* - return [currentI, and stack.join('')]
* if char == lowercase letter, based on currlevel % 2, push or unshift to stack
*/
// PASS
// TC: O(n)
// SC: O(n)
var reverseParentheses = function (s) {

  var process = function (s, level = 0, L = 0) {
    const stack = []
    for (let i = L; i <= s.length - 1; i++) {
      const ch = s[i]
      if (ch == '(') {
        let res = process(s, level + 1, i + 1)
        if (level % 2 == 0) {
          stack.push(res[1])
        } else {
          stack.unshift(res[1])
        }
        i = res[0]
      } else if (ch == ')') {
        return [i, stack.join('')]
      } else {
        if (level % 2 == 0) {
          stack.push(ch)
        } else {
          stack.unshift(ch)
        }
      }
    }
    return [s.length - 1, stack.join('')]
  }

  return process(s)[1]
};