// C(n, m) saved in comb
var generatePascalTriangle = function (numRows) {
  // C(2, 1) => combo[2][1]
  const comb = Array(numRows).fill(null).map((e, idx) => Array(idx + 1).fill(0))
  for (let i = 0; i < numRows; i++) {
    comb[i][i] = comb[i][0] = 1;
    if (i == 0) continue;
    for (let j = 1; j < i; j++) {
      comb[i][j] = comb[i - 1][j - 1] + comb[i - 1][j]
    }
  }
  return comb
};

// C(n, m) saved in array
var getRow = function (rowIndex) {
  let curr = Array(rowIndex + 1).fill(0)
  let pre = Array(rowIndex + 1).fill(0)

  pre[0] = 1;
  for (let i = 0; i < rowIndex + 1; i++) {
    curr = Array(rowIndex + 1).fill(0)
    curr[0] = curr[i] = 1;
    for (let j = 1; j < i; j++) {
      curr[j] = pre[j - 1] + pre[j]
    }
    pre = curr
  }
  return pre
};

// C(n,m) = n choose m
function processCombination(n, m) {
  let cnt = 1;
  for (let i = 0; i < m; i++) {
    cnt *= n - i;
    cnt /= i + 1;
  }
  return cnt
}

module.exports = { processCombination, generatePascalTriangle, getRow }