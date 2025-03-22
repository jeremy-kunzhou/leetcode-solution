const f = require('./Combination')

const comb = f.generatePascalTriangle(10)
// console.log('full comb')
// console.log(comb)

const arr = f.getRow(3)
// console.log('last row')
// console.log(arr)

// console.log('C(3, 2): 3 choose 2 \nexpect 3, get:', f.processCombination(3, 2))
// console.log('C(3, 2) in comb[3][2] get:', comb[3][2])
// console.log('C(3, 2) in arr[2] get:', arr[2])


test('full comb', () => {
  expect(f.generatePascalTriangle(10)).toEqual(expect.arrayContaining([[1], [1, 1], [1, 2, 1], [1, 3, 3, 1], [1, 4, 6, 4, 1], [1, 5, 10, 10, 5, 1], [1, 6, 15, 20, 15, 6, 1], [1, 7, 21, 35, 35, 21, 7, 1], [1, 8, 28, 56, 70, 56, 28, 8, 1], [1, 9, 36, 84, 126, 126, 84, 36, 9, 1]]));
});

test('last row', () => {
  expect(f.getRow(3)).toEqual(expect.arrayContaining([1, 3, 3, 1]));
});


test('C(3, 2): 3 choose 2', () => {
  expect(f.processCombination(3, 2)).toEqual(3);
});


test('C(3, 2) in comb[3][2]', () => {
  expect(comb[3][2]).toEqual(3);
});

test('C(3, 2) in arr[2]', () => {
  expect(arr[2]).toEqual(3);
});

