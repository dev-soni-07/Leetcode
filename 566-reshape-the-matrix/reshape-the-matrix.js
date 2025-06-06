/**
 * @param {number[][]} mat
 * @param {number} r
 * @param {number} c
 * @return {number[][]}
 */
var matrixReshape = function(mat, r, c) {
    const m = mat.length;
    const n = mat[0].length;

    if (m * n !== r * c) {
        return mat;
    }

    const flat = [];
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            flat.push(mat[i][j]);
        }
    }

    const reshaped = [];
    for (let i = 0; i < r; i++) {
        reshaped.push(flat.slice(i * c, i * c + c));
    }

    return reshaped;
};