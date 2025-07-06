/**
 * @param {number[][]} matrix
 * @return {number[][]}
 */
var modifiedMatrix = function(matrix) {
    const m = matrix.length;
    const n = matrix[0].length;

    const colMax = Array(n).fill(-Infinity);
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (matrix[i][j] !== -1) {
                colMax[j] = Math.max(colMax[j], matrix[i][j]);
            }
        }
    }
    
    const answer = [];
    for (let i = 0; i < m; i++) {
        answer[i] = [];
        for (let j = 0; j < n; j++) {
            if (matrix[i][j] === -1) {
                answer[i][j] = colMax[j];
            } else {
                answer[i][j] = matrix[i][j];
            }
        }
    }
    return answer;
};