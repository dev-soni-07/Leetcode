/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function(matrix) {
    if (!matrix) return;

    let rows = new Set();
    let columns = new Set();

    for (let row = 0; row < matrix.length; row++) {
        for (let column = 0; column < matrix[row].length; column++) {
            if (matrix[row][column] === 0) {
                rows.add(row);
                columns.add(column);
            }
        }
    }

    for (let row = 0; row < matrix.length; row++) {
        for (let column = 0; column < matrix[row].length; column++) {
            if (rows.has(row) && columns.has(column)) {
                matrix[row][column] = 0;
            }
            if (rows.has(row)) {
                matrix[row][column] = 0;
            }
            if (columns.has(column)) {
                matrix[row][column] = 0;
            }
        }
    }
};