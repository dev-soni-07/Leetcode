
/**
 * @param {number} n
 * @param {number[][]} grid
 * @param {number[]} rowShift
 * @param {number[]} colShift
 * @return {number[][]}
 */
var cyclicShift = function(n, grid, rowShift, colShift) {
    const temp = Array.from({ length: n }, () => Array(n).fill(0));
    const ans = Array.from({ length: n }, () => Array(n).fill(0));

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            const newCol = (j - rowShift[i] + n) % n;
            temp[i][newCol] = grid[i][j];
        }
    }

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            const newRow = (i - colShift[j] + n) % n;
            ans[newRow][j] = temp[i][j];
        }
    }

    return ans;
};
