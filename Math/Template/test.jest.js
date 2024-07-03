const f = require('./Combination')

const comb = f.generatePascalTriangle(10)
console.log('full comb')
console.log(comb)

const arr = f.getRow(3)
console.log('last row')
console.log(arr)

console.log('C(3, 2): 3 choose 2 \nexpect 3, get:', f.processCombination(3, 2))
console.log('C(3, 2) in comb[3][2] get:', comb[3][2])
console.log('C(3, 2) in arr[2] get:', arr[2])
