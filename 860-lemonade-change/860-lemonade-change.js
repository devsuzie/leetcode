/**
 * @param {number[]} bills
 * @return {boolean}
 */
var lemonadeChange = function(bills) {
  const balance = new Map();

  for (const bil of bills) {
    switch (true) {
      case bil === 20:
        if (balance.get(5) >= 1 && balance.get(10) >= 1) {
          balance.set(5, balance.get(5) - 1);
          balance.set(10, balance.get(10) - 1);
        } else if (balance.get(5) >= 3) {
          balance.set(5, balance.get(5) - 3);
        } else {
          return false;
        }
        break;
      case bil === 10:
        if (balance.get(5) >= 1) {
          balance.set(5, balance.get(5) - 1);
          balance.set(10, balance.get(10) + 1 || 1);
        } else {
          return false;
        }
        break;
      case bil === 5:
        balance.set(5, balance.get(5) + 1 || 1);
        break;
    }
  }

  return true;
};