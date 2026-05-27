/**
 * @param {number[][]} grid
 * @return {number}
 */
var numMagicSquaresInside = function(grid) {
    const rows = grid.length;
    const cols = grid[0].length;

    function isMagic(r, c) {
        const seen = new Set();

        for (let i = r; i < r + 3; i++) {
            for (let j = c; j < c + 3; j++) {
                const val = grid[i][j];

                if (val < 1 || val > 9 || seen.has(val)) {
                    return false;
                }

                seen.add(val);
            }
        }

        const target =
            grid[r][c] +
            grid[r][c + 1] +
            grid[r][c + 2];

        for (let i = r; i < r + 3; i++) {
            const rowSum =
                grid[i][c] +
                grid[i][c + 1] +
                grid[i][c + 2];

            if (rowSum !== target) {
                return false;
            }
        }

        for (let j = c; j < c + 3; j++) {
            const colSum =
                grid[r][j] +
                grid[r + 1][j] +
                grid[r + 2][j];

            if (colSum !== target) {
                return false;
            }
        }

        const diag1 =
            grid[r][c] +
            grid[r + 1][c + 1] +
            grid[r + 2][c + 2];

        const diag2 =
            grid[r][c + 2] +
            grid[r + 1][c + 1] +
            grid[r + 2][c];

        return diag1 === target && diag2 === target;
    }

    let count = 0;

    for (let r = 0; r <= rows - 3; r++) {
        for (let c = 0; c <= cols - 3; c++) {
            if (isMagic(r, c)) {
                count++;
            }
        }
    }

    return count;
};