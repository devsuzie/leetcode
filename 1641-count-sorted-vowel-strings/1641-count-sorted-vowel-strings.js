/**
 * @param {number} n
 * @return {number}
 */
var countVowelStrings = function (n) {
  let dp = new Array(5).fill(1);
  for (let i = 2; i <= n; i++) {
    for (let j = 3; j >= 0; j--) {
      dp[j] = dp[j] + dp[j + 1];
    }
  }

  let count = 0;
  for (let num of dp) {
    count += num;
  }

  return count;
};
