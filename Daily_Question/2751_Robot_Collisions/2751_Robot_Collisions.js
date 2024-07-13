/**
 * @param {number[]} positions
 * @param {number[]} healths
 * @param {string} directions
 * @return {number[]}
 * intuition: 
 * simulation the whole activities
 * TC: O(nlogn)
 * SC: O(n)
 */
var survivedRobotsHealths = function (positions, healths, directions) {
  let robots = []
  for (let i = 1; i <= positions.length; i++) {
    robots.push({
      no: i,
      position: positions[i - 1],
      health: healths[i - 1],
      direction: directions[i - 1]
    })
  }
  // O(nlogn)
  let lines = robots.sort((a, b) => a.position - b.position)

  let stack = [lines[0]]

  for (let i = 1; i < lines.length; i++) {
    let next = lines[i]
    if (stack[stack.length - 1]?.direction == 'R' && next.direction == 'L') {
      let res = { ...next }
      while (stack[stack.length - 1]?.direction == 'R' && res) {
        r = stack.pop()
        if (r.health > res.health) {
          res = { no: r.no, position: r.position, health: r.health - 1, direction: r.direction }
          break;
        } else if (r.health < res.health) {
          res.health -= 1
        } else {
          res = null
          break
        }

      }
      if (res) stack.push(res)
    }
    else {
      stack.push(next)
    }
  }
  return stack.sort((a, b) => a.no - b.no).map(e => e.health)
};