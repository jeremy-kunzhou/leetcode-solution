const { shortestPath, shortestPathV2 } = require('./Dijkstra');

const edges = [
  { n1: 1, n2: 2, weight: 1 },
  { n1: 1, n2: 3, weight: 4 },
  { n1: 2, n2: 3, weight: 2 },
  { n1: 2, n2: 4, weight: 7 },
  { n1: 3, n2: 4, weight: 3 },
]

test('dijkstra with queue', () => {
  expect(shortestPath(edges, 4, 1)).toEqual(
    new Map([
      [1, 0],
      [2, 1],
      [3, 3],
      [4, 6]
    ])
  );
})

test('dijkstra with path', () => {
  expect(shortestPathV2(edges, 4, 1, 4)).toEqual(
    {
      distance: [Infinity, 0, 1, 3, 6],
      path: [1, 2, 3, 4]
    }
  );
});
