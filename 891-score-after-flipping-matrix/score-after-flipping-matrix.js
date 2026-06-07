/**
 * @param {number[][]} grid
 * @return {number}
 */
var matrixScore = function(grid) {
    const m = grid.length;
    const n = grid[0].length;

    for (let i = 0; i < m; i++) {
        if (grid[i][0] === 0) {
            for (let j = 0; j < n; j++) {
                grid[i][j] ^= 1;
            }
        }
    }

    for (let j = 1; j < n; j++) {
        let ones = 0;

        for (let i = 0; i < m; i++) {
            ones += grid[i][j];
        }

        if (ones < m - ones) {
            for (let i = 0; i < m; i++) {
                grid[i][j] ^= 1;
            }
        }
    }

    let score = 0;

    for (let i = 0; i < m; i++) {
        let value = 0;

        for (let j = 0; j < n; j++) {
            value = (value << 1) + grid[i][j];
        }

        score += value;
    }

    return score;
};