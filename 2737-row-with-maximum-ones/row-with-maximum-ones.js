/**
 * @param {number[][]} mat
 * @return {number[]}
 */
var rowAndMaximumOnes = function(mat) {
    let maxOnes = 0;
    let rowIndex = 0;
    for (let i = 0; i < mat.length; i++) {
        let ones = mat[i].reduce((sum, val) => sum + val, 0);
        if (ones > maxOnes) {
            maxOnes = ones;
            rowIndex = i;
        }
    }
    return [rowIndex, maxOnes];
};