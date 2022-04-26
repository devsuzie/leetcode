/**
 * @param {string} boxes
 * @return {number[]}
 */
var minOperations = function(boxes) {
    let move = new Array(boxes.length).fill(0)
    for(let i=0; i<boxes.length; i++){
        for(let j=0; j<boxes.length; j++){
            if(boxes[j] == '1'){
                move[i] += Math.abs(j-i)
            }
        }
    }
    return move;
};