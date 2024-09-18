// generate prime
function generatePrime(max) {
  const arr = Array(max + 1).fill(true)
  arr[0] = arr[1] = false
  for (let i = 2; i < arr.length; i++) {
    if (arr[i]) {
      for (let j = i * i; j < arr.length; j += i) {
        arr[j] = false
      }
    }
  }
  return arr.map((e, i) => [i, e]).filter(e => e[1]).map(e => e[0])
}

// greatest common divisor
// allow negative inputs
function gcd(n1, n2) {
  if (n2 != 0) {
    return gcd(n2, n1 % n2)
  }
  return Math.max(-n1, n1)
}

function gcdIterator(n1, n2) {
  while (n2 != 0) {
    [n1, n2] = [n2, n1 % n2]
  }
  return Math.max(-n1, n1)
}

// least common multiple
function lcm(n1, n2) {
  return (n1 * n2) / gcd(n1, n2)
}

module.exports = {
  generatePrime, gcd, lcm
}