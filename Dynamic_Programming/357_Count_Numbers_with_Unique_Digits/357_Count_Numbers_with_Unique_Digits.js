/**
 * @param {number} n
 * @return {number}
 */

var bf = function (n) {
  function process(n) {
    if (n == 0) return 1;
    if (n == 1) return 10;

    let factor = 9;
    let product = 9
    let count = n
    // n
    // C(1,9)*C(1,9)*C(1,8)*C(1,7)* ... *C(1,1)
    // |---------------- n -----------------|
    // n = 2
    // C(1,9)*C(1,9)  -> 10 - 99
    // + process(n-1)  -> 0 - 9
    while (count >= 2) {
      product *= factor;
      factor--
      count--
    }
    return product + process(n - 1)
  }

  return process(n)
}

var countNumbersWithUniqueDigits = function (n) {
  return bf(n)
};