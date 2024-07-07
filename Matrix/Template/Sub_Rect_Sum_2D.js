class RegionSum {
  constructor(A) {
    const m = A.length;
    const n = A[0].length;
    this.presum = Array(m).fill(0).map(e => Array(n).fill(0))
    for (let i = 0; i < m; i++) {
      for (let j = 0; j < n; j++) {
        const a = i == 0 ? 0 : this.presum[i - 1][j]
        const b = j == 0 ? 0 : this.presum[i][j - 1]
        const c = (i == 0 || j == 0) ? 0 : this.presum[i - 1][j - 1]
        this.presum[i][j] = a + b - c + A[i][j]
      }
    }
  }

  query(i, j, x, y) {
    const a = j == 0 ? 0 : this.presum[x][j - 1]
    const b = i == 0 ? 0 : this.presum[i - 1][y];
    const c = (i == 0 || j == 0) ? 0 : this.presum[i - 1][j - 1];
    return this.presum[x][y] - a - b + c
  }
}