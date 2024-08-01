/**
 * @param {string[]} details
 * @return {number}
 * 5303914400   F 92 11
 * TC: O(n)
 * SC: O()
 */
var countSeniors = function (details) {
  let count = 0;
  for (let i = 0; i < details.length; i++) {
    if (details[i].slice(11, 13) > '60') count++
  }
  return count
};