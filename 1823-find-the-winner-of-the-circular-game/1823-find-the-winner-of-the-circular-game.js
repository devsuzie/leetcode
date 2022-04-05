/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var findTheWinner = function (n, k) {
  const que = [];

  for (let i = 0; i < n; i += 1) {
    que.push(i + 1);
  }

  while (que.length > 1) {
    for (let i = 0; i < k - 1; i += 1) {
      const firstFriend = que.shift();
      que.push(firstFriend);
    }

    que.shift();
  }

  const [winner] = que;
  return winner;
};
