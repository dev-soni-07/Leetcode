/**
 * @param {number[][]} grid
 * @return {number[]}
 */
var findColumnWidth = function(grid) {
    const m = grid.length;
    const n = grid[0].length;
    const ans = [];

    for (let col = 0; col < n; col++) {
        let maxLen = 0;
        for (let row = 0; row < m; row++) {
            const len = grid[row][col].toString().length;
            if (len > maxLen) maxLen = len;
        }
        ans.push(maxLen);
    }
    return ans;
};