/**
 * @param {string} boxes
 * @return {number[]}
 */
var minOperations = function(boxes) {
    let n = boxes.length;
    let res = new Array(n).fill(0);
    
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            if (boxes[j] === '1') {
                res[i] += Math.abs(i - j);
            }
        }
    }
    
    return res;
};
