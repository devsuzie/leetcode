/**
 * @param {string} s
 * @return {string}
 */
var frequencySort = function(s) {
  let charMap = new Map();
  
  for (let char of s) {
    charMap.set(char, charMap.get(char) + 1 || 1);
  }
  
  return s.split('').sort((a,b) =>
    charMap.get(b) - charMap.get(a) || b.charCodeAt(0) - a.charCodeAt(0)
  ).join('');
};