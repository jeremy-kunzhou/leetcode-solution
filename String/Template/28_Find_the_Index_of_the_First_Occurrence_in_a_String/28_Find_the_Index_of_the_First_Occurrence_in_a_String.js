/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 * Intuition:
 * KMP
 * TC: O(n + m)
 * SC: O(m)
 */
var strStr = function (haystack, needle) {
  if (needle.length == 0) return 0;
  const lps = Array(needle.length).fill(0)
  let prevLPS = 0, i = 1;
  while (i < needle.length) {
    if (needle[i] == needle[prevLPS]) {
      lps[i] = prevLPS + 1;
      prevLPS++;
      i++
    } else if (prevLPS == 0) {
      lps[i] = 0;
      i++
    } else {
      prevLPS = lps[prevLPS - 1]
    }
  }

  let hP = 0;
  let nP = 0;
  while (hP < haystack.length) {
    if (haystack[hP] == needle[nP]) {
      hP++;
      nP++;
    } else {
      if (nP == 0) { hP++ }
      else { nP = lps[nP - 1] }
    }
    if (nP == needle.length) {
      return hP - needle.length
    }
  }
  return -1
};