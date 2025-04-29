/**
 * @param {number[][]} mat
 * @param {number[][]} target
 * @return {boolean}
 */
var findRotation = function(mat, target) {
    const n = mat.length;

    const rotate90 = (matrix) => {
        const rotated = Array.from({ length: n }, () => Array(n).fill(0));
        for (let i = 0; i < n; i++) {
            for (let j = 0; j < n; j++) {
                rotated[j][n - i - 1] = matrix[i][j];
            }
        }
        return rotated;
    };

    for (let i = 0; i < 4; i++) {
        if (JSON.stringify(mat) === JSON.stringify(target)) {
            return true;
        }
        mat = rotate90(mat);
    }

    return false;
};