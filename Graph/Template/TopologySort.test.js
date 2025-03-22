const { TopologySort } = require('./TopologySort')

let n = 6; // Number of nodes

// Edges
let edges = [[0, 1], [1, 2], [2, 3], [4, 5], [5, 1], [5, 2]];
let ts = new TopologySort(n, edges)
// console.log('dfs')
// console.log(ts.dfsSort())

// console.log('kahn')
// console.log(ts.kahn())

test('TopologySort dfs', () => {
  expect(ts.dfsSort()).toEqual(expect.arrayContaining([1]));
})

test('TopologySort kahn', () => {
  expect(ts.dfsSort()).toEqual(expect.arrayContaining([1]));
})

// console.log('========= case with cycle =========')
let n1 = 6; // Number of nodes

// Edges
let edges1 = [[0, 1], [1, 2], [2, 1]];
let ts1 = new TopologySort(n1, edges1)
// console.log('dfs')
// console.log(ts.dfsSort())

// console.log('kahn')
// console.log(ts.kahn())

test('TopologySort dfs cycle', () => {
  expect(ts1.dfsSort()).toEqual(expect.arrayContaining([]));
})

test('TopologySort kahn cycle', () => {
  expect(ts1.dfsSort()).toEqual(expect.arrayContaining([]));
})