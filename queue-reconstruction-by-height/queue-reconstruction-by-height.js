/**
 * @param {number[][]} people
 * @return {number[][]}
 */
var reconstructQueue = function (people) {
  let output = [];

  people.sort((a, b) => {
    if (a[0] !== b[0]) {
      return b[0] - a[0];
    } else {
      return a[1] - b[1];
    }
  });

  for (let i = 0; i < people.length; i++) {
    let insertIdx = people[i][1];
    output.splice(insertIdx, 0, people[i]);
  }

  return output;
};
