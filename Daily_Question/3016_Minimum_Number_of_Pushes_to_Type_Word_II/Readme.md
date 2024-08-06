# Intuition

[Leetcode](https://leetcode.com/problems/minimum-number-of-pushes-to-type-word-ii/)

Daily Question on August 6, 2024

# Approach

```
find the frequency of the lowercase letters in the word O(n)
sort the frequency.
the top eight letters will be assigned to eight keys
and then continue to assigned th next top eight letters; types twice for each letter appear
and then for the rest of the letters. type three times for each letter appear
```

# Complexity

- Time complexity: O(n)

- Space complexity: O(n)
