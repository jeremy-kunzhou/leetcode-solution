/**
 * @param {number} rows
 * @param {number} cols
 * @param {number} rStart
 * @param {number} cStart
 * @return {number[][]}
 * simulation

 * rS, cS, length, firstDirection = right
 * rS, cS -> rS, cS + length -1
 * rS, cS + length -1 -> rS + length -1, cS + length -1

 * firstDirection = left
 * rS, cS -> rS, cS - length + 1
 * rS, cS - length + 1 -> rS - length + 1, cS - length + 1
 */
var spiralMatrixIII = function (rows, cols, rStart, cStart) {
  const res = []
  function check(r, c) {
    return (r >= 0 && r < rows && c >= 0 && c < cols)
  }
  function traverse(rS, cS, length, direction) {
    // first horizontal
    for (let n = 1; n < length; n++) {
      const r = rS
      const c = cS + direction * (n - 1);
      if (check(r, c)) {
        res.push([r, c])
      }
    }
    // second vertical
    for (let n = 1; n < length; n++) {
      const r = rS + direction * (n - 1)
      const c = cS + direction * (length - 1);
      if (check(r, c)) {
        res.push([r, c])
      }
    }
    return [rS + direction * (length - 1), cS + direction * (length - 1)]
  }
  let length = 2
  let direction = 1
  let endNode = [rStart, cStart]
  while (res.length < rows * cols) {
    endNode = traverse(endNode[0], endNode[1], length, direction)
    direction = -direction
    length++;
  }
  return res
};