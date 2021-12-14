/**
 * @param {string} s
 * @return {string[]}
 */
var findRepeatedDnaSequences = function(s) {
  let sequence = new Set();
  let ans = new Set();

  for (let i = 0; i < s.length; i++){
    let curr = s.substring(i, i+10);
    
    if (curr.length === 10){
      sequence.has(curr) ? ans.add(curr) : sequence.add(curr);
    };
  };
  
  return [...ans];
};