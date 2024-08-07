/**
 * @param {number} num
 * @return {string}
 */

var dic = {
  0: '',
  1: 'One',
  2: "Two",
  3: 'Three',
  4: 'Four',
  5: 'Five',
  6: 'Six',
  7: 'Seven',
  8: 'Eight',
  9: 'Nine',
  10: 'Ten',
  11: 'Eleven',
  12: 'Twelve',
  13: 'Thirteen',
  14: 'Fourteen',
  15: 'Fifteen',
  16: 'Sixteen',
  17: 'Seventeen',
  18: 'Eighteen',
  19: 'Nineteen',
  20: 'Twenty',
  30: 'Thirty',
  40: 'Forty',
  50: 'Fifty',
  60: 'Sixty',
  70: 'Seventy',
  80: 'Eighty',
  90: 'Ninety',
  100: 'Hundred',
  1000: 'Thousand',
  1000000: 'Million',
  1000000000: 'Billion'
}

var numberToWords = function (num) {
  // edge case for num is 0
  if (num == 0) return 'Zero'

  // split the num to 3-digit group
  const splitArr = []
  while (num > 0) {
    const rem = num % 1000
    num = (num / 1000) >> 0
    splitArr.push(rem)
  }

  // translate the 3 digits to word
  function translate(num) {
    let h = num / 100 >> 0
    let t = (num - 100 * h) / 10 >> 0
    let s = num % 10

    let hstr = ''
    if (h > 0) {
      hstr = `${dic[h]} ${dic[100]} `
    }
    let tstr = ''
    let sstr = ''
    if (t >= 2) {
      tstr = `${dic[t * 10]} ${dic[s]}`
    } else {
      sstr = dic[t * 10 + s]
    }
    return `${hstr}${tstr}${sstr}`.trim()
  }

  // translate the group to word
  let res = ''
  for (let i = splitArr.length - 1; i >= 0; i--) {
    // if the given part is zero, there will be no trail word
    if (splitArr[i] == 0) continue
    res += translate(splitArr[i]) + ' ' + (i == 0 ? '' : dic[10 ** (i * 3)]) + ' '
  }
  return res.trim()
};