/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

var bf = function (nums, target) {
  function process(current, sum, arr) {
    if (sum == target) {
      return 1;
    }
    if (sum > target) return 0;
    if (current >= nums.length || current < 0) return 0;

    let count = 0;
    for (let i = 0; i < nums.length; i++) {
      count += process(i, sum + nums[current], [...arr, nums[current]])
    }

    return count
  }

  let count = 0
  for (let i = 0; i < nums.length; i++) {
    count += process(i, 0, [])
  }
  return count / nums.length
}

var bfC = function (nums, target) {
  let cache = new Map()
  function process(current, sum, cache) {
    const key = `${current},${sum}`
    if (sum == target) {
      return 1;
    }
    if (sum > target) return 0;
    if (current >= nums.length || current < 0) return 0;

    if (cache.has(key)) return cache.get(key)
    let count = 0;
    for (let i = 0; i < nums.length; i++) {
      count += process(i, sum + nums[current], cache)
    }

    cache.set(key, count)
    return cache.get(key)
  }

  let count = 0
  for (let i = 0; i < nums.length; i++) {
    count += process(i, 0, cache)
  }
  return count / nums.length
}

var dp = function (nums, target) {
  let cache = Array(nums.length + 1).fill(0).map(e => Array(target + 1).fill(0))
  for (let i = -20; i < nums.length; i++) {
    for (let current = nums.length; current >= 0; current--) {
      for (let sum = target; sum >= 0; sum--) {
        if (sum == target) {
          cache[current][sum] = 1;
          continue;
        }
        if (sum > target) {
          cache[current][sum] = 0;
          continue;
        }
        if (current >= nums.length || current < 0) {
          cache[current][sum] = 0;
          continue;
        }

        let count = 0;
        for (let i = 0; i < nums.length; i++) {
          count += sum + nums[current] <= target ? cache[i][sum + nums[current]] : 0
        }
        cache[current][sum] = count
      }
    }
  }
  let count = 0
  for (let i = 0; i < nums.length; i++) {
    count += cache[i][0]
  }
  return count / nums.length
}

var bfV = function (nums, target) {
  function process(sum) {
    if (sum == target) {
      return 1;
    }
    if (sum > target) return 0;

    let count = 0;
    for (let i = 0; i < nums.length; i++) {
      count += process(sum + nums[i])
    }

    return count
  }

  let count = process(0)
  return count
}

var dpV = function (nums, target) {
  let cache = Array(target + 1).fill(0)
  for (let sum = target; sum >= 0; sum--) {
    if (sum == target) {
      cache[sum] = 1; continue
    }
    if (sum > target) {
      cache[sum] = 0; continue;
    }
    let count = 0;
    for (let i = 0; i < nums.length; i++) {
      count += sum + nums[i] <= target ? cache[sum + nums[i]] : 0
    }

    cache[sum] = count
  }

  return cache[0]

}
var combinationSum4 = function (nums, target) {
  return dpV(nums, target)
};