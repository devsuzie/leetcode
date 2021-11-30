/**
 * @param {number[][]} image
 * @return {number[][]}
 */
var flipAndInvertImage = function (A) {
  let reversed = A.map((currArray, index) => {
    return currArray.reverse()
  })

  for (let i = 0; i < reversed.length; i++) {
    for (let j = 0; j < reversed[i].length; j++) {
      reversed[i][j] = reversed[i][j] === 1 ? 0 : 1
    }
  }

  return reversed
}
