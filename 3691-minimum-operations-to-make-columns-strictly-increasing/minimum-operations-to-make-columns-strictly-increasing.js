/**
 * @param {number[][]} grid
 * @return {number}
 */
var minimumOperations = function(grid) {
    let m = grid.length;
    let n = grid[0].length;
    let ops = 0;

    for (let col = 0; col < n; col++) {
        for (let row = 1; row < m; row++) {
            if (grid[row][col] <= grid[row - 1][col]) {
                let increase = grid[row - 1][col] + 1 - grid[row][col];
                ops += increase;
                grid[row][col] += increase;
            }
        }
    }

    return ops;
};
