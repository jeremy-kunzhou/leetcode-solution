function longestValid(strings) {
  let res = 0;
  let left = 0;
  // Use a HashSet to track valid strings
  let state = new Set();
  for (let i = 0; i < strings.length; i++) {
    state.add(strings[i]);
    // While the state is not valid, remove strings from the left
    while (!isValid(state) && left <= i) {
      state.remove(strings[left]);
      left++;
    }
    res = Math.max(res, i - left + 1);
  }
  return res;
}

function isValid(state) {
  // Implement your validation logic here
  // Return true if the state is valid, false otherwise
  return true;
}

function shortestValid(strings) {
  let res = strings.length + 1;
  let left = 0;
  // Use a HashSet to track valid strings
  let state = new Set();
  for (let i = 0; i < strings.length; i++) {
    state.add(strings[i]);
    // While the state is not valid, remove strings from the left
    while (isValid(state) && left <= i) {
      res = Math.min(res, i - left + 1);
      state.remove(strings[left]);
      left++;
    }

  }
  return res == strings.length + 1 ? -1 : res;
}
