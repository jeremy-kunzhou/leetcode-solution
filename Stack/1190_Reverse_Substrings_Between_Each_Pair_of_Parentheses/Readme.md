# Intuition

[Leetcode](https://leetcode.com/problems/reverse-substrings-between-each-pair-of-parentheses/)

# Approach

## 1

```
 use stack to simulate the action
 if char == lowercase letter, push to stack
 if char == '(' push to stack
 if char == ')' pop stack until found '('
 - if stack is not empty: push backward from the end
 - if stack is empty; push current temp.join('') to the stack

```

## 2

```
loop the string
if char == '(',
- recursive call to process(level+1, i+1)
- get the res
- i = res[0]
- based on currlevel % 2, push or unshift res[1] to stack
if char == ')'
- return [currentI, and stack.join('')]
if char == lowercase letter
- based on currlevel % 2, push or unshift to stack

```

# Complexity

## 1

- Time complexity: O(n ^ 2)

- Space complexity: O(n)

## 2

- Time complexity: O(n)

- Space complexity: O(n)
