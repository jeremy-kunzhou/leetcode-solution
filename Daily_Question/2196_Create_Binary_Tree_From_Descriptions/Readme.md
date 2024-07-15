# Intuition

[Leetcode](https://leetcode.com/problems/create-binary-tree-from-descriptions)
Daily Question on July 15, 2024

create binary tree from descriptions

```
the description element has structure [parentNodeValue, childNodeValue, isLeft(0,1)]

using TreeNode as Node class to create the tree node based on those elements
add all node value to root candidate set.
after the tree build up, loop the descriptions again to delete the childNodeValue from root candidate set to find the root node value
```

# Approach

```
node hashmap to mapping value to node
root candidate hashmap to store root candidate
if parent in hashmap, retreet the parent node, else, create parent node then set to hashmap
if child in hashmap, retreet the child node, else, create child node then set to hashmap
based on isLeft, set child node to the left or right of the parent
if parent node not in root candidate, add it and set value to 1
in root candidate, set child node to 0
```

# Complexity

- Time complexity: O(n)

- Space complexity: O(n)