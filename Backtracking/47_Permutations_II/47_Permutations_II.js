/**
 * @param {number[]} nums
 * @return {number[][]}
 */

var iteration = function (nums) {
  let resPerm = [[]]

  for (let i = 0; i < nums.length; i++) {
    let perm = new Map()
    for (let p of resPerm) {
      for (let j = 0; j < p.length + 1; j++) {
        let cp = p.slice();
        cp.splice(j, 0, nums[i])
        perm.set(cp.join('-'), cp)
      }
    }
    resPerm = [...perm.values()]
  }
  return resPerm
}

var neetCode = function (nums) {
  nums.sort((a, b) => a - b)
  let map = new Map()
  nums.forEach(e => {
    if (!map.has(e)) {
      map.set(e, 0)
    }
    map.set(e, map.get(e) + 1)
  })

  const res = []

  function process(subset) {
    if (subset.length == nums.length) {
      res.push([...subset])
      return
    }
    for (let n of [...map.keys()]) {
      if (map.get(n) == 0) continue
      subset.push(n)
      map.set(n, map.get(n) - 1)
      process(subset)
      subset.pop()
      map.set(n, map.get(n) + 1)
    }
  }
  process([])

  return res

}

var permuteUnique = function (nums) {
  return neetCode(nums)
};