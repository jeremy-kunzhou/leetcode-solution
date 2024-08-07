# Intuition

[Leetcode](https://leetcode.com/problems/integer-to-english-words/)

Daily Question on August 7, 2024

# Approach

```
num range will be [0, 2 ^ 31 -1] the max will be around 4 billion: 4e9
build dic for numbers: 0: '', 1 - 20, 30, 40, 50, 60, 70, 80, 90, 100, 1000, 1000_000, 1000_000_000,
split number by 3-digit group
translate group to word
combine them with proper tail word

edge case:
0: Zero [no split, just return Zero]
1,000,010: One Million Ten [No thousand part]

```

# Complexity

- Time complexity: O(n)

- Space complexity: O(1)
