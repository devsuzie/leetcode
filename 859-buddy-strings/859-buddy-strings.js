/**
 * @param {string} s
 * @param {string} goal
 * @return {boolean}
 */
var buddyStrings = function (s, goal) {
  // Edge Case 1: s나 goal의 길이가 똑같지 않거나 없는 경우
  if (s.length == 0 || goal.length == 0 || (s.length != goal.length)) return false;

  // Edge Case 2: s와 goal 똑같은 경우 (s = "aa", goal = "aa" / s = "ab", goal = "ab")
  if (s === goal) {
    let hashTable = new Map();

    // e.g. "aa"
    for (let i = 0; i < s.length; i++) {
      if (hashTable.has(s[i])) return true;
      hashTable.set(s[i]);
    }

    // e.g. "ab"
    return false;
  }

  let swappedArray = [[0, 0][0, 0]];
  let swapCount = 0;

  // "if you can swap two letters"
  for (let i = 0; i < s.length; i++) {
    if (s[i] !== goal[i]) {
      swappedArray[swapCount] = [s[i], goal[i]];
      swapCount++;
      if (swapCount > 2) return false;
    }
  }

  // 아래의 경우 모두 true
  return (
    swappedArray.length === 2 &&
    swappedArray[0][0] === swappedArray[1][1] &&
    swappedArray[0][1] === swappedArray[1][0]
  );
};
