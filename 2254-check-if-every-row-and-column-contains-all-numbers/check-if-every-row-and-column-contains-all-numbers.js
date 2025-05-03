/**
 * @param {number[][]} matrix
 * @return {boolean}
 */
var checkValid = function(matrix) {
    const n = matrix.length;

    const isValid = (arr) => {
        const set = new Set(arr);
        return set.size === n && [...set].every(num => num >= 1 && num <= n);
    };

    for (let i = 0; i < n; i++) {
        if (!isValid(matrix[i])) {
            return false;
        }
    }

    for (let j = 0; j < n; j++) {
        const col = [];
        for (let i = 0; i < n; i++) {
            col.push(matrix[i][j]);
        }
        if (!isValid(col)) {
            return false;
        }
    }

    return true;
};