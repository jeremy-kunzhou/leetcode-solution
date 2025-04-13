// fast exponentiation algorithm
function expmod(base, exp, mod) {
  let res = 1n;
  base %= mod;
  while (exp > 0) {
    if (exp % 2n == 1n)
      res = (res * base) % mod
    base = (base * base) % mod
    exp = exp / 2n;
  }
  return res;
}