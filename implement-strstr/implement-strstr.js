/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {
  if (!needle) return 0

  let i = 0
  while (
    haystack.substring(i, needle.length + i) !== needle &&
    i <= haystack.length
  ) {
    i++
  }

  return i > haystack.length ? -1 : i
}