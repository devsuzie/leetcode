/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  if (prices.length === 1) return 0;
  let maximumProfit = 0;
  let buyIndex = 0;

  for (let i = 1; i < prices.length; i++) {
    if (prices[buyIndex] > prices[i]) buyIndex = i;
    else maximumProfit = Math.max(maximumProfit, prices[i] - prices[buyIndex]);
  }

  return maximumProfit;
};
